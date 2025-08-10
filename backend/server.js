import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import fetch from 'node-fetch';
import { isAuthenticated} from './authentication.js';
import MongoStore from 'connect-mongo';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI,)
.then(() => {
  console.log('MongoDB connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});



// Middleware
app.use(cors({
    origin: ['https://systelle.vercel.app','http://localhost:5173'],
    credentials: true,
    sameSite: "none",
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
// app.use(session({
//     secret: "mySecretKey",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: true,
//         sameSite:'none',
//         maxAge:1000*60*60*24
//      } 
// }));

//adding mongo session
app.set('trust proxy', 1);

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,         // important: only over HTTPS
    httpOnly: true,
    sameSite: 'none',     // required for cross-origin
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

// Routes
app.get("/", (req, res) => {
    res.send("Hello server");
});

// Mongoose Schemas
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const ProfileSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    DOB: String,
    age: Number,
    TotalDays: Number,
    LastDate: String,
    LastsUpto: Number
});

const DailyUpdateSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    date:{
        type: Date,
        default: Date.now, 
    },
    flowing:String,
    spotting:String,
    feelings:String,
    pain_level:String,
    sleep_quality:String,
    energy:String, 
    mind:String, 
    skin:String, 
    hair:String
});

const User = mongoose.model('User', UserSchema);
const Profile = mongoose.model('Profile', ProfileSchema);
const DailyUpdate = mongoose.model('DailyUpdate', DailyUpdateSchema);

// Login POST route for actual login
app.post("/login",async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
        req.session.user = { email, _id: user._id };
        return res.status(200).json({ success: true, redirectUrl: '/home' });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Logout route
app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ message: "Logout failed" });
        res.clearCookie('connect.sid');
        res.status(200).json({ message: "Logged out successfully" });
    });
});

// Signup route
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        req.session.user = { email, _id: newUser._id };
        res.status(200).json({ success: true, redirectUrl: '/signup/form' });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Signup failed', error });
    }
});

// Form route
app.post("/signup/form", isAuthenticated, async (req, res) => {
    const { DOB, age, TotalDays, LastDate, LastsUpto } = req.body;
    const profile = new Profile({
        userId: req.session.user._id,
        DOB, age, TotalDays, LastDate, LastsUpto
    });
    await profile.save();
    res.status(200).json({ success: true, redirectUrl: '/home' });
});

// Daily update route
app.post("/calendar/updates", async (req, res) => {
    const { flowing, spotting, feelings, pain_level, sleep_quality, energy, mind, skin, hair } = req.body;
    const update = new DailyUpdate({
        userId: req.session.user._id,
        flowing, spotting, feelings, pain_level,sleep_quality, energy, mind, skin, hair
    });
    await update.save();
    res.status(200).json({ success: true, message: "Daily update saved" });
});

//fetching user data for profile
app.get('/home/profile', isAuthenticated, async (req, res) => {
    try {
        const userId = req.session.user?._id;

        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await User.findById(userId).select('name email');
        const profile = await Profile.findOne({ userId });

        if (!user || !profile) {
            return res.status(404).json({ message: "User or profile not found" });
        }
        res.status(200).json({
            name: user.name,
            email: user.email,
            dob: profile.DOB,
            age: profile.age,
            cycleStart: profile.LastDate,
            cycleDuration: profile.LastsUpto
        });

    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Latest Daily Update for fallback
app.get('/pcos/latest-data', isAuthenticated, async (req, res) => {
  try {
    const update = await DailyUpdate.findOne({ userId: req.session.user._id }).sort({ date:-1 });
    if (!update) {
      return res.status(404).json({ success: false, message: "No daily updates found" });
    }
    res.status(200).json(update);
  } catch (err) {
    console.error("Error fetching latest daily update:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Prediction
app.post('/pcos/predict', isAuthenticated, async (req, res) => {
  try {
    const userId = req.session.user._id;
    const latestUpdate = await DailyUpdate.findOne({ userId }).sort({ date: -1 });
    const profile = await Profile.findOne({ userId });

    if (!latestUpdate || !profile) {
      return res.status(404).json({ error: "Insufficient data for prediction" });
    }

    const predictionInput = {
      How_was_your_flowing: latestUpdate.flowing,
      Any_Spotting_or_irregular_spotting: latestUpdate.spotting,
      What_is_your_pain_level: latestUpdate.pain_level,
      How_was_your_sleep_quality: latestUpdate.sleep_quality,
      How_you_feel_about_your_skin: latestUpdate.skin,
      How_you_feel_about_your_hair: latestUpdate.hair,
      Your_cycle_last_upto: profile.LastsUpto || 5,
      Number_of_days_of_menstrual_cycle: profile.TotalDays || 28
    };

    const flaskRes = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(predictionInput)
    });

    const data = await flaskRes.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error calling Flask model:', error);
    res.status(500).json({ error: 'Model server not responding' });
  }
});

//managing user session
app.get("/signup/form", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/home/:subroute", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/home", isAuthenticated,async (req, res) => {
    const user = await User.findById(req.session.user._id).select("name");
    const profile = await Profile.findOne({ userId: req.session.user._id })
    res.status(200).json({
            success: true,
            name: user.name,
            totalDays: profile.TotalDays,
            lastDate: profile.LastDate,
            message: "You are at home"
        });
});
app.get('/login',(req, res) => {
    if(req.session.user) return res.status(401).json({ success: false, message: "Unauthorized" });
    res.status(200).json({ message: "Login page access granted" });
});
app.get("/calendar", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `You are at calendar` });
});
app.get("/calendar/:subroute", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/health", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `You are at health` });
});
app.get("/health/:subroute", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/exercise", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `You are at exercise` });
});
app.get("/exercise/:subroute", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `You are at ${req.params.subroute}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
