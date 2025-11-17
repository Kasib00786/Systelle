import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import fetch from 'node-fetch';
import { isAuthenticated } from './authentication.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// FIXED SESSION SETTINGS
app.use(session({
  secret: "mySecretKey",
  resave: false,
  saveUninitialized: false, // FIXED
  cookie: {
    httpOnly: true,
    secure: false,           // must be false on localhost
    sameSite: "lax"          // FIXED: prevents cookie blocking
  }
}));

// Schemas
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
  date: { type: Date, default: Date.now },
  flowing: String,
  spotting: String,
  feelings: String,
  pain_level: String,
  sleep_quality: String,
  energy: String,
  mind: String,
  skin: String,
  hair: String
});

const User = mongoose.model('User', UserSchema);
const Profile = mongoose.model('Profile', ProfileSchema);
const DailyUpdate = mongoose.model('DailyUpdate', DailyUpdateSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Hello server");
});

/* LOGIN */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (user) {
    req.session.user = { email, _id: user._id };
    return res.status(200).json({ success: true, redirectUrl: '/home' });
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

/* LOGOUT */
app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.clearCookie('connect.sid');
    res.status(200).json({ message: "Logged out successfully" });
  });
});

/* SIGNUP */
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

/* SIGNUP FORM */
app.post("/signup/form", isAuthenticated, async (req, res) => {
  const { DOB, age, TotalDays, LastDate, LastsUpto } = req.body;

  const profile = new Profile({
    userId: req.session.user._id,
    DOB, age, TotalDays, LastDate, LastsUpto
  });

  await profile.save();

  res.status(200).json({ success: true, redirectUrl: '/home' });
});

/* DAILY UPDATES */
app.post("/calendar/updates", isAuthenticated, async (req, res) => {
  try {
    const update = new DailyUpdate({
      userId: req.session.user._id,
      ...req.body
    });

    await update.save();
    res.status(200).json({ success: true, message: "Daily update saved" });
  } catch (err) {
    console.error("Error saving daily update:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* PROFILE FETCH */
app.get('/home/profile', isAuthenticated, async (req, res) => {
  const userId = req.session.user?._id;

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
});

/* PROFILE UPDATE */
app.post('/home/profile/update', isAuthenticated, async (req, res) => {
  try {
    const userId = req.session.user._id;
    const { name, dob, cycleStart, cycleDuration } = req.body;

    const user = await User.findById(userId);
    const profile = await Profile.findOne({ userId });

    if (!user || !profile) {
      return res.status(404).json({ success: false, message: "User or profile not found" });
    }

    if (name) user.name = name;
    if (dob) profile.DOB = dob;
    if (cycleStart) profile.LastDate = cycleStart;
    if (cycleDuration) profile.LastsUpto = cycleDuration;

    await user.save();
    await profile.save();

    return res.status(200).json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

/* LATEST DATA */
app.get('/pcos/latest-data', isAuthenticated, async (req, res) => {
  try {
    const update = await DailyUpdate.findOne({ userId: req.session.user._id })
      .sort({ date: -1 });

    if (!update) {
      return res.status(404).json({ success: false, message: "No daily updates found" });
    }

    res.status(200).json(update);
  } catch (err) {
    console.error("Error fetching latest daily update:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* PCOS PREDICTION */
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

    const flaskRes = await fetch('https://systelle-model.onrender.com/predict', {
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

/* HOME PAGE */
app.get("/home", isAuthenticated, async (req, res) => {
  const user = await User.findById(req.session.user._id).select("name");
  const profile = await Profile.findOne({ userId: req.session.user._id });

  res.status(200).json({
    success: true,
    name: user.name,
    totalDays: profile.TotalDays,
    lastDate: profile.LastDate,
    message: "You are at home"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
