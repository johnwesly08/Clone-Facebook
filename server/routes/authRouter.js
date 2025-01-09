const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const {registerUser, loginUser} = require('../controllers/authController');

const router = express.Router();

router.post('/register',registerUser);
router.post('/login', loginUser);


router.get('/profile', verifyToken, async(req, res) => {
    try {
        const user = await user.findById(req.user.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;