// import moment from 'moment';
var moment = require('moment');
const mongoose	        = require("mongoose");
var ObjectID = require('mongodb').ObjectID;
const Orders             = require('../models/subscriptionorders.js');
function convertDateTOString(ISODate){
	var currDate = ISODate;
    var day = currDate.getDate();
    var month = currDate.getMonth() + 1;
    var year = currDate.getYear();
    if (year < 1900) {
        year = year + 1900;
    }
    if (day < 10 || day.length < 2) { day = '0' + day; }
    if (month < 10 || month.length < 2) { month = '0' + month; }
    currDateISO = year + "-" + month + "-" + day;
    console.log("currDateISO ",currDateISO);
    return currDateISO;
}
exports.create_order = (req, res, next) => {
	var order = new Orders({
								"_id"           	: mongoose.Types.ObjectId(), 
								"plan_ID"			: req.body.planID,
								"typeofPlan"		: req.body.typeofPlan, //Subscription Plan or Offering Plan
							    "userID"			: req.body.userID,
							    "planName"			: req.body.planName,
								"planAmount"  		: req.body.planAmount, 
								"validityPeriod" 	: req.body.validityPeriod, //1 month or 1 year
								"purchaseDate"		: req.body.purchaseDate, //"YYYY-MM-DD"
								"startDate" 		: req.body.startDate, //"YYYY-MM-DD"
								"endDate" 			: req.body.endDate, //"YYYY-MM-DD"
								"transactionId" 	: req.body.transactionId,
								"amountPaid"		: req.body.amountPaid,
								"createdBy"			: req.body.createdBy,
							});
	order.save()
        .then(data=>{
                res.status(200).json({
                                    message : "ORDER_INSERTED",
                                    ID      : data._id
                                });
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });	
};
exports.fetch_order = (req, res, next) => {
	Orders.findOne({_id : ObjectID(req.params.ID)})
		  .exec()
		  .then(data=>{
			  	if(data){
			  		res.status(200).json(data);
			  	}else{
			  		res.status(200).json({message:"DATA_NOT_FOUND"})
			  	}
			  })
		  .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_order_all = (req, res, next) => {
	var limitRange  = 10;
    var countNum2   = limitRange * req.params.pageno;
    var startRange  = countNum2 - limitRange;
	Orders.find({})
		  .sort({createdAt : -1})
          .skip(startRange)
          .limit(limitRange)
		  .exec()
		  .then(data=>{
			  	if(data){
			  		res.status(200).json(data);
			  	}else{
			  		res.status(200).json({message:"DATA_NOT_FOUND"})
			  	}
			  })
		  .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_order_all_user = (req, res, next) => {
	var limitRange  = 10;
    var countNum2   = limitRange * req.params.pageno;
    var startRange  = countNum2 - limitRange;
	Orders.find({"userID" : ObjectID(req.params.userID)})
		  .sort({createdAt : -1})
          .skip(startRange)
          .limit(limitRange)
		  .exec()
		  .then(data=>{
			  	if(data){
			  		res.status(200).json(data);
			  	}else{
			  		res.status(200).json({message:"DATA_NOT_FOUND"})
			  	}
			  })
		  .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_order_type = (req, res, next) => {
	var limitRange  = 10;
    var countNum2   = limitRange * req.params.pageno;
    var startRange  = countNum2 - limitRange;
	Orders.find({"typeofPlan" : req.params.type})
		  .sort({createdAt : -1})
          .skip(startRange)
          .limit(limitRange)
		  .exec()
		  .then(data=>{
			  	if(data){
			  		res.status(200).json(data);
			  	}else{
			  		res.status(200).json({message:"DATA_NOT_FOUND"})
			  	}
			  })
		  .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_order_type_user = (req, res, next) => {
    var startRange  = countNum2 - limitRange;
	Orders.find({"typeofPlan" : req.params.type,"userID" : ObjectID(req.params.userID)})
		  .sort({createdAt : -1})
		  .exec()
		  .then(data=>{
			  	if(data){
			  		res.status(200).json(data);
			  	}else{
			  		res.status(200).json({message:"DATA_NOT_FOUND"})
			  	}
			  })
		  .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.patch_order = (req, res, next) => {
	Orders.updateOne(
                        {_id:ObjectID(req.params.ID)},
                        {
                            $set : {
                                "typeofPlan"		: req.body.typeofPlan, //Subscription Plan or Offering Plan
							    "userID"			: req.body.userID,
							    "planName"			: req.body.planName,
								"planAmount"  		: req.body.planAmount, 
								"validityPeriod" 	: req.body.validityPeriod, //1 month or 1 year
								"purchaseDate"		: req.body.purchaseDate, //"YYYY-MM-DD"
								"startDate" 		: req.body.startDate, //"YYYY-MM-DD"
								"endDate" 			: req.body.endDate, //"YYYY-MM-DD"
								"transactionId" 	: req.body.transactionId,
								"amountPaid"		: req.body.amountPaid
                            }
                        }
                    )
         .exec()
         .then(data=>{
            if(data.nModified === 1){
                res.status(200).json({message : "ORDER_UPDATED"})
            }else{
                res.status(200).json({message : "ORDER_NOT_UPDATED"})
            }
         })
};
exports.patch_order_blog = (req, res, next) => {
	Orders.updateOne(
                        {_id:ObjectID(req.params.orderID)},
                        {
                            $push : {
                            			"listofBlogs" : {
                            				"blog_ID" 		: req.body.blog_ID,
											"accessDate"	: req.body.accessDate
                            			}
                            		}
                        }
                    )
         .exec()
         .then(data=>{
            if(data.nModified === 1){
                res.status(200).json({message : "BLOG_ADDED"})
            }else{
                res.status(200).json({message : "BLOG_NOT_ADDED"})
            }
         })
};
exports.patch_order_statement = (req, res, next) => {
	switch(req.params.action){
		case 'add' :
				Orders.updateOne(
		                        {_id:ObjectID(req.params.orderID)},
		                        {
		                            $push : 
		                            		{
		                            			statements : {
		                            				"path"  			: req.body.path,
													"name"				: req.body.name,
													"size"				: req.body.size,
													"extension" 		: req.body.extension,
													"uploadDate"		: req.body.uploadDate, //"YYYY-MM-DD"
		                            			}
		                            		}
		                        }
		                    )
			         .exec()
			         .then(data=>{
			            if(data.nModified === 1){
			                res.status(200).json({message : "STATEMENT_ADDED"})
			            }else{
			                res.status(200).json({message : "STATEMENT_NOT_ADDED"})
			            }
			         })
			break;
		case 'remove' : 
					Orders.updateOne(
		                        {_id:ObjectID(req.params.orderID)},
		                        {
		                            $pull : 
		                            		{
		                            			statements : {
		                            				_id        : req.body.statement_ID,
		                            			}
		                            		}
		                        }
		                    )
				         .exec()
				         .then(data=>{
				            if(data.nModified === 1){
				                res.status(200).json({message : "STATEMENT_REMOVED"})
				            }else{
				                res.status(200).json({message : "STATEMENT_NOT_REMOVED"})
				            }
				         })
			break;
		default :
			res.status(200).json({message:"INVALID_ACTION"})
	}
};
exports.delete_order = (req, res, next) => {
	Orders.deleteOne({_id:ObjectID(req.params.ID)})
         .exec()
         .then(data=>{
            if(data.deletedCount === 1){
                res.status(200).json({message : "BLOG_DELETED"})
            }else{
                res.status(200).json({message : "BLOG_NOT_DELETED"})
            }
         })
};
exports.offering_order = (req,res,next) =>{
	var currDateISO = convertDateTOString(new Date());
	var endDate = convertDateTOString(new Date(new Date().getFullYear() + 1,new Date().getMonth(),new Date().getDate()));
	// res.status(200).json({currDateISO,endDateISO,endDate});
	if(req.body.btnStatus === 'checked'){
		Orders.find({
						"userID"		: ObjectID(req.body.userID),
						"typeofPlan"	: "Offer",
						"planStatus"	: "Active",
					})
			  .exec()
			  .then(data=>{
			  	if(data.length > 0){
			  		Orders.updateOne(
			  							{"_id" : data[0]._id},
			  							{
			  								$push:{
			  									"offeringDetails" : {
																	"offering_ID" 		: req.body.planID,
																	"startDate"			: currDateISO,
																	"endDate"			: endDate,
																	"offeringStatus"	: "Active", 
																}
			  								}
			  							}
			  						)
			  			  .exec()
			  			  .then(updatedata=>{
			  			  	if(updatedata.nModified === 1){
			  			  		res.status(200).json({message:"OFFERING_UPDATED",ID:data[0]})
			  			  	}else{
			  			  		res.status(200).json({message:"OFFERING_NOT_UPDATED"})
			  			  	}
			  			  })
			  			  .catch(err =>{
				                console.log(err);
				                res.status(500).json({
				                    error: err
				                });
				            })
			  	}else{
			  		var order = new Orders({
									"_id"           	: mongoose.Types.ObjectId(), 
									"plan_ID"			: req.body.planID,
									"typeofPlan"		: "Offer", //Subscription Plan or Offering Plan
								    "userID"			: req.body.userID,
									"validityPeriod" 	: "1 Year", //1 month or 1 year
									"purchaseDate"		: currDateISO, //"YYYY-MM-DD"
									"startDate" 		: currDateISO, //"YYYY-MM-DD"
									"endDate" 			: endDate, //"YYYY-MM-DD"
									"transactionId" 	: "1",
									"amountPaid"		: 0,
									"createdBy"			: req.body.createdBy,
									"planStatus"   		: "Active",
									"offeringDetails"		: [{
																"offering_ID" 		: req.body.planID,
																"startDate"			: moment().format("YYYY-MM-DD"),
																"endDate"			: endDate,
																"offeringStatus"	: "Active", 
															}]
								});
					order.save()
				        .then(data=>{
				                res.status(200).json({
				                                    message : "OFFERING_INSERTED",
				                                    ID      : data
				                                });
				            })
				            .catch(err =>{
				                console.log(err);
				                res.status(500).json({
				                    error: err
				                });
				            });
			  	}
			  })
			  .catch(err =>{
	                console.log(err);
	                res.status(500).json({
	                    error: err
	                });
	            });
	}else{
		console.log("offering_order ",req.body);
		Orders.updateOne(
  							{
  								"userID"						: ObjectID(req.body.userID),
								"typeofPlan"					: "Offer",
								"planStatus"					: "Active",
								"offeringDetails.offering_ID" 	: ObjectID(req.body.planID),
  							},
  							{
  								$set:{
  									"offeringDetails.$.endDate" 		: currDateISO,
  									"offeringDetails.$.offeringStatus" : "Inactive"
  								}
  							}
  						)
  			  .exec()
  			  .then(updatedata=>{
  			  	if(updatedata.nModified === 1){
  			  		Orders.find({
									"userID"		: ObjectID(req.body.userID),
									"typeofPlan"	: "Offer",
									"planStatus"	: "Active",
								})
						  .exec()
						  .then(data=>{
			  			  		res.status(200).json({message:"OFFERING_UPDATED",ID:data[0]})
			  			  	})
						  .catch(err =>{
				                console.log(err);
				                res.status(500).json({
				                    error: err
				                });
				            })
  			  	}else{
  			  		res.status(200).json({message:"OFFERING_NOT_UPDATED"})
  			  	}
  			  })
  			  .catch(err =>{
	                console.log(err);
	                res.status(500).json({
	                    error: err
	                });
	            })
	}
};
exports.fetch_order_list_user_status = (req, res, next) => {
	Orders.aggregate([
				{
					$match : {
						"userID" : ObjectID(req.params.userID),
						"planStatus" : 'Active'
					}
				},
				{
					$unwind: "$offeringDetails"
				},
				{
					$project : {
						"userID" 			: 1,
						"offering_ID" 		: "$offeringDetails.offering_ID",
						"offeringStatus"	: "$offeringDetails.offeringStatus",
					}
				}
			])
		  .exec()
		  .then(data=>{
			  	if(data){
			  		res.status(200).json(data);
			  	}else{
			  		res.status(200).json({message:"DATA_NOT_FOUND"})
			  	}
			  })
		  .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });	

	// Orders.find({"userID" : req.params.userID,planStatus : 'Active'})
	// 	  .select("offeringDetails userID")
	// 	  .sort({createdAt : -1})
		  // .exec()
		  // .then(data=>{
			 //  	if(data){
			 //  		res.status(200).json(data);
			 //  	}else{
			 //  		res.status(200).json({message:"DATA_NOT_FOUND"})
			 //  	}
			 //  })
		  // .catch(err =>{
    //                 console.log(err);
    //                 res.status(500).json({
    //                     error: err
    //                 });
    //             });
};

exports.fetch_order_list_active_status = (req, res, next) => {
	Orders.aggregate([
				{
					$match : {
						"planStatus" : 'Active'
					}
				},
				{
					$unwind: "$offeringDetails"
				},
				{
					$project : {
						"userID" 			: 1,
						"offering_ID" 		: "$offeringDetails.offering_ID",
						"offeringStatus"	: "$offeringDetails.offeringStatus",
					}
				},
				{
					$match : {
						"offeringStatus" : "Active"
					}
				}
			])
		  .exec()
		  .then(data=>{
			  	if(data){
			  		res.status(200).json(data);
			  	}else{
			  		res.status(200).json({message:"DATA_NOT_FOUND"})
			  	}
			  })
		  .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });	
};
