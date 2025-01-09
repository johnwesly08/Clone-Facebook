const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type:String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePicture: {type: String, default: ''},
    coverPicture:{type: String, default: ''},
    followers: {type: Array,  default: []},
    following: {type: Array,  default: []},
    isAdmin: {type: String,  default: false},
},{timeStamp: true});

module.exports = mongoose.model('User', UserSchema);