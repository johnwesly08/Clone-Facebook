const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRouter");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//cors
app.use(cors(corsOptions));

//Helmet for security
app.use(helmet());

//middleware
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

//MongoDB connection
connectDB();

//Start the server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});