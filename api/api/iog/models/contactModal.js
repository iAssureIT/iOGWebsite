const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
    _id                     : mongoose.Schema.Types.ObjectId,
      userName              : String,
      companyName           : String,
      designation           : String,
      country               : String,
      email                 : String,
      message               : String,
      contactNumber         : String,
      subject               : String,
      enquiry               : String,
    createdAt               : Date,                
    
});

module.exports = mongoose.model('contactModal',blogsSchema);



