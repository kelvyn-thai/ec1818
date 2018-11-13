const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema  = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}, 
    name: {type: String},
    age: {type: String},
    phone: {type: String}
})

module.exports = userSchema;