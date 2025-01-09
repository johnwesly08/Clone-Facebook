const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');


const router = express.Router();

router.post = ('/register', async(req,res) => {
    try { 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
});

module.exports = router; 