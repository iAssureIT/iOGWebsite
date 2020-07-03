const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
	_id				: mongoose.Schema.Types.ObjectId,
    candidateName   : String,
    jobDescription  : String,
    DOB             : Date,
    email           : String,
    phone           : String,
    currentCity     : String, 
    currentCTC      : Number,
    expectedCTC     : Number,
    noticePeriod    : Number,
    createdAt       : Date,                
	
});

module.exports = mongoose.model('jobapplicationform',blogsSchema);



