const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const AuthService = require('../services/auth');
const router = express.Router();

router.get('/google', AuthService.google);

router.get('/google/callback', AuthService.googleCallback);

router.get('/logout', AuthService.logout);

module.exports = router;