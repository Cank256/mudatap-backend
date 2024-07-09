const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    message: 'Welcome to the MudaTap Server.',
  })
})

/* GET home page. */
router.get('/dashboard', function (req, res, next) {
  res.json({
    message: 'Welcome to the MudaTap Dashboard.',
  })
})

router.use('/auth', require('./auth'))

module.exports = router
