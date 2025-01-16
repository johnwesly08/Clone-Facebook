const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: {type:String, required: true, unique: true},
    lname: {type:String, required: true, unique: true},
    dob: {type:Date, required: true},
    email: {type: String, unique: true, sparse: true},
    phoneNumber: {type: String, unique: true, sparse: true},
    password: {type: String, required: true},
    profilePicture: {type: String, default: ''},
    coverPicture:{type: String, default: ''},
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
},{timeStamp: true});

module.exports = mongoose.model('User', UserSchema);