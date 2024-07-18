

// Middleware function to check if user is authenticated
module.exports = function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { // Assuming you are using Passport.js for authentication
        return next();  // User is authenticated, proceed to the next middleware/route handler
    }
    // User is not authenticated, redirect to login page or send a 401 Unauthorized status
    res.redirect('/auth/google'); // Redirect to login page
}
