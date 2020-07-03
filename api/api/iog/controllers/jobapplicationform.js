const mongoose                       = require("mongoose");
var ObjectID                         = require('mongodb').ObjectID;
const JobApplicationform             = require('../models/jobapplicationform.js');

exports.create_jobapplicationform = (req, res, next) => {
    console.log("inside comment");

        const jobapplicationform    = new JobApplicationform({

            _id                     :  new mongoose.Types.ObjectId(), 
            candidateName           : req.body.candidateName,
            DOB                     : req.body.DOB,
            email                   : req.body.email,
            phone                   : req.body.phone,
            currentCity             : req.body.currentCity, 
            currentCTC              : req.body.currentCTC,
            expectedCTC             : req.body.expectedCTC,
            noticePeriod            : req.body.noticePeriod,
            createdAt               : new Date(),     
        });

        
        jobapplicationform.save()
            .then(data=>{
                console.log("data--->",data);
                    res.status(200).json({
                                        message : "JOBFORM_INSERTED",
                                        ID      : data._id,
                                    });
                })
                .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });

                           
}; 
exports.fetch_one = (req,res,next)=>{
    JobApplicationform.findOne({"_id":req.params.fetchId})
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
exports.list_jobapplicationform = (req,res,next)=>{
    JobApplicationform.find()
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

exports.update_jobappication = (req,res,next)=>{
    JobApplicationform.updateOne(

                        { "_id":req.params.form_id},    
                        
                        {
                         $set:{
                            "candidateName"           : req.body.candidateName,
                            "DOB"                     : req.body.DOB,
                            "email"                   : req.body.email,
                            "phone"                   : req.body.phone,
                            "currentCity"             : req.body.currentCity, 
                            "currentCTC"              : req.body.currentCTC,
                            "expectedCTC"             : req.body.expectedCTC,
                            "noticePeriod"            : req.body.noticePeriod,
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
exports.delete_jobapplication = (req,res,next)=>{
    JobApplicationform.deleteOne({"_id":req.params.form_id})
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
exports.delete_all_applicationforms = (req,res,next)=>{
    JobApplicationform.deleteMany({})
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