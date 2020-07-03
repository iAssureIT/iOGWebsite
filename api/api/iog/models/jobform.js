const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
	_id			        	: mongoose.Schema.Types.ObjectId,
	name1                   : String,
    city                    : String,
    state1                  : String, 
    country                 : String,
    education               : String,
    college                 : String,
    year                    : Date,
    experience              : String,
    curr_ctc                : String,
    exp_ctc                 : String,
    email                   : String,
    contactNumber           : Number,
    position                : Array,
    resume                  : String,
    noticePeriod            : String,
    skills                  : String,
    createdAt               : Date,                
	
});

module.exports = mongoose.model('jobform',blogsSchema);



