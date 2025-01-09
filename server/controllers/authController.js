const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //creating a new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//Login an Existing user

const loginUser = async(req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) return res.return(404).json("User not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).json("Invalid credentials");

        //create JSON web tokens
        const token = jwt.sign(
            {id: user._id, username: user._username},
            process.env.SECRET_KEY, // Your JWT token
            {expiresIn: '1h'}
        );

        res.status(200).json(user); //Successful Login
    } catch(err) {
        res.status(500).json({error: err.message});
    }
}
module.exports = {registerUser, loginUser}; 