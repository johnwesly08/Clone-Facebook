const {Schema, default: mongoose} = require('mongoose')

const userModels = new Schema ({
    fname: {
        type: String,
        require: true
    },
    sname: {
        type: String,
        require: true
    },
    gmail: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    pwd: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    }

})

const UserModels = require('userModels')