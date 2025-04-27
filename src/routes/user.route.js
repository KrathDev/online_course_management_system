const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const userValidation = require('../validations/user.validation')

router.post('/register', userValidation.register, userController.register)
router.post('/login', userValidation.login, userController.login)
router.get('/profile', authMiddleware.isUser, userController.getProfile)

module.exports = router
