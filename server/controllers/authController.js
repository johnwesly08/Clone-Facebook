const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //creating a new user
    const newUser = new User({
      fname: req.body.fname,
      lname: req.body,
      lname,
      phNo: req.body.phNo,
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

const loginUser = async (req, res) => {
  const { credential } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: credential }, { phNo: credential }],
    });
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).json({ error: "Invalid credentials" });

    const payload = {
      id: user._id,
      fname: user._fname,
      lname: user._lname,
      email: user._email,
    };
    //create JSON web tokens
    const token = jwt.sign(
      payload,
      process.env.SECRET_KEY, // Your JWT token
      { expiresIn: process.env.EXPIRY || "3d" }
    );

    res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
      },
      token: token,
    }); //Successful Login
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserProfile = async (req, res) => {
  console.log("user from token", req.user);
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };