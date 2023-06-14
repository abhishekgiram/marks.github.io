const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    phone:String,
    email:String
})
const userModel = mongoose.model('usermodel',userSchema);
module.exports = userModel;