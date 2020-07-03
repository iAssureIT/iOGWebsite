const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
	_id				: mongoose.Schema.Types.ObjectId,
    block_id        : mongoose.Schema.Types.ObjectId,
    name            : String,
    email           : String,
    comment         : String,
    reply           : String,
	replies			: [{
						name      :String,
                        email     :String,
                        reply     :String,
                       
					  }],
    createdAt       : Date,                
	
});

module.exports = mongoose.model('blogcomment',blogsSchema);



