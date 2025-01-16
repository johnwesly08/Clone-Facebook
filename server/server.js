const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRouter");
const corsOptions = require("./config/corsOptions");
const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

//cors
app.use(cors(corsOptions));

//Helmet for security
app.use(helmet());

//MongoDB connection
connectDB();

//Start the server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// routes
app.use("/api/auth", authRoutes);