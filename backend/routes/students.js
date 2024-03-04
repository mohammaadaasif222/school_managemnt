const express = require('express');
const router = express.Router()
const {isLoggedIn} = require('../middlewares/verifyToken')
const {} = require('../controllers/students')
router.post('/create',isLoggedIn, createStudent, )

module.exports = router