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
    req.session.user = { email };
    res.status(200).json({ success: true, redirectUrl: '/form' });
});

// Form route
app.post("/signup/form", (req, res) => {
    const { name, DOB, age, TotalDays, LastDate, LastsUpto } = req.body;
    console.log("Received form data:", req.body);
    res.status(200).json({ success: true, redirectUrl: '/home' });
});

// Daily update route
app.post("/calendar/updates", (req, res) => {
    const dailyAnswers = req.body;
    console.log("Received daily update:", dailyAnswers);
    res.status(200).json({ success: true, message: "Daily update saved" });
});

//managing user session
app.get("/signup/form", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/home/:subroute", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/home", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get('/login',(req, res) => {
    if(req.session.user) return res.status(401).json({ success: false, message: "Unauthorized" });
    res.status(200).json({ message: "Login page access granted" });
});
app.get("/calendar", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/calendar/:subroute", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/health", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/health/:subroute", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/exercise", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});
app.get("/exercise/:subroute", isAuthenticated, (req, res) => {
    res.status(200).json({ message: `You are at ${req.params.subroute}` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
