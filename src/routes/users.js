const express = require('express')
const router = express.Router()
const userService = require('../services/users')

router.get('', userService.getAll)
router.post('add', userService.addUser)
router.put('update', userService.updateUser)
router.delete('delete', userService.deleteUser)

module.exports = router
