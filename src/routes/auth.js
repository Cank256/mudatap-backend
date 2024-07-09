const express = require('express');
const AuthService = require('../services/auth');
const router = express.Router();

router.get('/google', AuthService.googleAuth);

router.get('/google/callback', AuthService.googleCallback);

router.get('/logout', AuthService.logout);

module.exports = router;