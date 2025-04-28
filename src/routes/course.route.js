const express = require('express')
const router = express.Router()
const courseController = require('../controllers/course.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/', authMiddleware.isAdmin, courseController.createCourse)

module.exports = router
