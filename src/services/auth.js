const jwt = require('jsonwebtoken');
const passport = require('passport');

class AuthService {
  static googleAuth(req, res, next) {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
  }

  static googleCallback(req, res, next) {
    passport.authenticate('google', { failureRedirect: '/' }, (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect('/');
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/dashboard');
      });
    })(req, res, next);
  }

  static logout(req, res) {
    req.logout();
    res.clearCookie('token');
    res.redirect('/');
  }
}

module.exports = AuthService;