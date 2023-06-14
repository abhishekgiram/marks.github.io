const mongoose = require('mongoose');

const marks2019 = mongoose.Schema({   
SrNo:String,
cutoff:String,
ChoiceCode:String,
Institute:String,
CourseName:String,
FIELD6:String,
Type:String,
SeatType:String

})
const userModel = mongoose.model('marks2019',marks2019);
module.exports = userModel;