const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const {registerUser, loginUser, getUserProfile} = require('../controllers/authController');


const router = express.Router();

router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, getUserProfile);

module.exports = router;