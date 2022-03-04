const express = require('express')
const router = express.Router()
// Controllers
const authControllers = require('../controllers/auth')

router.post("/login", authControllers.postSignup)

module.exports = router