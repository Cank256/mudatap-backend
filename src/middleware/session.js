require('dotenv').config()
const session = require('express-session');

// Session middleware setup
module.exports = session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure: true in production with HTTPS
  });
