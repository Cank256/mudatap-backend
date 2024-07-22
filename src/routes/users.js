const express = require('express')
const router = express.Router()
const userService = require('../services/users')

router.get('', userService.getAll)
router.post('', userService.addUser)
router.put('/:id', userService.updateUser)
router.delete('/:id', userService.deleteUser)

module.exports = router
