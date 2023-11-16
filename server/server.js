const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongoose = require('mongoose');

const app = express(app);



app.use(express.json);
app.use(cors({"origin":true, "credentials":false}));

mongoose.connect(process.env.MONGO_URI)
    .then (()=>{
        app.listen(process.env.PORT, ()=> {
            console.log(`Database is connected successfully\n and running in localHost server:${process.env.PORT}`);
        })
    }).catch((error) => {
            console.log(error);
        })

app.use('/home',)