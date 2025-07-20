import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "mySecretKey"
}))

// Routes
app.get("/", (req, res) => {
    res.send("Hello server");
});

app.get("/login", (req, res)=> {
    if (req.session.user) return res.redirectUrl('/home')
    res.render('login')
})
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("Received login data:", req.body);

    if (email === "kasib7890@gmail.com" && password === "12345") {
        // Tell frontend that login is successful
        return res.status(200).json({ success: true, redirectUrl: '/home' });
    }

    // Invalid credentials
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
