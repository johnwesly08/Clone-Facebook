const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRouter');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

//cors
app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
}));

//Helmet for security
app.use(helmet({ 
    contentSecurityPolicy: false,
    referrerPolicy: {policy: 'strict-origin-when-cross-origin'},
}));

//middleware
app.use(express.json());

// routes 
app.use('/api/auth', authRoutes);

//MongoDB connection
connectDB();

//Start the server
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
