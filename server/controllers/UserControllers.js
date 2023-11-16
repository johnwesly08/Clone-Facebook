const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const {SECRET_KEY,EXPIRY_TIME}  = process.env