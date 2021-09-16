const mongoose            = require("mongoose");
var ObjectID              = require('mongodb').ObjectID;
const ContactModal             = require('../models/contactModal.js');

exports.create_contactModal = (req, res, next) => {
    console.log("inside comment");
        const contactModal = new ContactModal({
                    _id                     :  new mongoose.Types.ObjectId(),
                  userName                  : req.body.userName,
                  companyName               : req.body.companyName,
                  designation               : req.body.designation,
                  country                   : req.body.country,
                  email                     : req.body.email,
                  message                   : req.body.message,
                  contactNumber             : req.body.contactNumber,
                  subject                   : req.body.subject,
                  enquiry                   : req.body.enquiry,
                  createdAt                 : new Date(),
        });
        
        contactModal.save()
            .then(data=>{
                console.log("data--->",data);
                    res.status(200).json({
                                        message : "ContactModal_INSERTED",
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
exports.list_contactform = (req,res,next)=>{
    ContactModal.find()
     .sort({createdAt : -1})
        .exec()
        .then(data=>{
            // console.log("list_contactform => data",data);
            res.status(200).json(data);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}; 
exports.fetch_onecontactModal = (req,res,next)=>{
    ContactModal.findOne({"_id":req.params.fetchId})
        .exec()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json('PAGE_NOT_FOUND');
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};  

exports.update_contactModal = (req,res,next)=>{
    ContactModal.updateOne(

                        { "_id":req.params.form_id},    
                        
                        {
                            $set:{
                                "jobTitle"                : req.body.jobTitle,
                                "jobDescription"          : req.body.jobDescription,
                                "city"                    : req.body.city, 
                                "fromDate"                : req.body.fromDate,
                                "toDate"                  : req.body.toDate,
                                "skills"                  : req.body.skills,
                            }
                        }
                    )
                    .exec()
                    .then(data=>{
                        console.log('data ',data);
                        if(data){
                            res.status(200).json("COMMENT_UPDATED");
                        }else{
                            res.status(401).json("COMMENT_NOT_UPDATED");
                        }
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
}; 
exports.delete_contactModal = (req,res,next)=>{
    ContactModal.deleteOne({"_id":req.params.form_id})
        .exec()
        .then(data=>{
            console.log('data ',data);
            if(data.deletedCount === 1){
                res.status(200).json("COMMENT_DELETED");
            }else{
                res.status(200).json("COMMENT_NOT_DELETED");
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
exports.delete_all_formscontactModal = (req,res,next)=>{
    ContactModal.deleteMany({})
        .exec()
        .then(data=>{
            res.status(200).json("All forms deleted");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};