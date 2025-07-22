//check if user is logged in
export function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next(); // proceed if logged in
    }
    return res.status(401).json({ message: "Unauthorized" });
}

//block login/signup if already logged in
export function blockAuthenticated(req, res, next) {
    if (req.session.user) {
        return res.status(403).json({ message: "You are already logged in" });
    }
    next();
}
