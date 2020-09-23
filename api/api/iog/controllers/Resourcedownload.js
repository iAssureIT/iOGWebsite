const mongoose            = require("mongoose");
var ObjectID              = require('mongodb').ObjectID;
const DownloadResource             = require('../models/Resourcedownload.js');

exports.create_download = (req, res, next) => {
    console.log("inside comment");

        const downloadResource         = new DownloadResource({

                    _id                     :  new mongoose.Types.ObjectId(), 

                  userName                 : req.body.userName,
                  companyName               : req.body.companyName,
                  designation               : req.body.designation,
                  country                   : req.body.country,
                  email                     : req.body.email,
                  message                   : req.body.message,
                  contactNumber             : req.body.contactNumber,
                  subject                   : req.body.subject,
                  enquiry                   : req.body.enquiry,
                  createdAt                  : new Date(),  

        });
        
        downloadResource.save()
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
exports.list_download = (req,res,next)=>{
    DownloadResource.find()
     .sort({createdAt : -1})
        .exec()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}; 
exports.fetch_download = (req,res,next)=>{
    DownloadResource.findOne({"_id":req.params.fetchId})
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

exports.update_download = (req,res,next)=>{
    DownloadResource.updateOne(

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
exports.delete_download = (req,res,next)=>{
    DownloadResource.deleteOne({"_id":req.params.form_id})
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
exports.delete_all_download = (req,res,next)=>{
    DownloadResource.deleteMany({})
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