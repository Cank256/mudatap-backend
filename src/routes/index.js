const express = require('express')
const router = express.Router()
const authenticated = require('../middleware/auth')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    message: 'Welcome to the MudaTap Server.',
  })
})

/* GET home page. */
router.get('/dashboard', authenticated, function (req, res, next) {
  res.json({
    message: 'Welcome to the MudaTap Dashboard.',
  })
})

router.use('/auth', require('./auth'))
router.use('/users', require('./users'))

module.exports = router
