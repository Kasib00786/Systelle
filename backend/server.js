import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import { isAuthenticated, blockAuthenticated } from './authentication.js'; // Assuming these are defined in authentication.js

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // For dev only, use true in HTTPS production
}));

// Routes
app.get("/", (req, res) => {
    res.send("Hello server");
});



// Login POST route for actual login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("Received login data:", req.body);

    if (email === "kasib7890@gmail.com" && password === "12345") {
        // Save user session
        req.session.user = { email };
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
app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    console.log("Received signup data:", req.body);
    res.status(200).json({ success: true, redirectUrl: '/form' });
});

// Form route
app.post("/form", (req, res) => {
    const { name, DOB, age, TotalDays, LastDate, LastsUpto } = req.body;
    console.log("Received form data:", req.body);
    res.status(200).json({ success: true, redirectUrl: '/home' });
});

// Daily update route
app.post("/dailyUpdate", (req, res) => {
    const dailyAnswers = req.body;
    console.log("Received daily update:", dailyAnswers);

    if (!req.session.user) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    res.status(200).json({ success: true, message: "Daily update saved" });
});



// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
