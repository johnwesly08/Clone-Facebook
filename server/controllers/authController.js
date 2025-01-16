const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { fname, lname, dob, email, phoneNumber, password } = req.body;

    //Form Validation in Backend
    if (!fname || !lname) {
      return res
        .status(400)
        .json({ error: "First name or Last name is not provided" });
    }

    if (!email && !phoneNumber) {
      return res
        .status(400)
        .json({ error: "Email or Phone Number is not provided" });
    }

    if (!dob) {
      return res.status(400).json({ error: "Date of Birth is not provided" });
    }

    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    //Check for existing user
    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email or Phone Number already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //creating a new user
    const newUser = new User({
      fname,
      lname,
      dob,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res
      .status(200)
      .json({ message: "User Registered Successfully", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Login an Existing user

const loginUser = async (req, res) => {
  try {
    const { credential, password } = req.body;

    if (!credential || !password) {
      return res
        .status(400)
        .json({ error: "Email/Phone and Password is required" });
    }
    const user = await User.findOne({
      $or: [{ email: credential }, { phoneNumber: credential }],
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
      fname: user.fname,
      lname: user.lname,
      email: user.email,
    };
    //create JSON web tokens
    const token = jwt.sign(
      payload,
      process.env.SECRET_KEY, // Your JWT token
      { expiresIn: process.env.EXPIRY || "3d" }
    );

    res.status(200).json({
      message: "User Login Successful",
      user: {
        id: user._id,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      token: token,
    }); //Successful Login
  } catch (err) {
    res.status(500).json({ message: "Server Error", details: err.message });
  }
};

//Get User Profile

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({ error: "User Not Found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
