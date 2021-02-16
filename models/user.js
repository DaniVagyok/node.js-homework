const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String,
    group: {
        type: String,
        default: null
    }
})
module.exports = mongoose.model('user', userSchema, 'users')