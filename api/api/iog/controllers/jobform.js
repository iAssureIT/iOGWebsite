const mongoose            = require("mongoose");
var ObjectID              = require('mongodb').ObjectID;
const Jobform             = require('../models/jobform.js');

exports.create_jobform = (req, res, next) => {
    console.log("inside comment");

        const jobform         = new Jobform({

            _id                     :  new mongoose.Types.ObjectId(), 
            name1                   : req.body.name1,
            city                    : req.body.city,
            state1                  : req.body.state1, 
            country                 : req.body.country,
            education               : req.body.education,
            college                 : req.body.college,
            year                    : req.body.year,
            experience              : req.body.experience,
            curr_ctc                : req.body.curr_ctc,
            exp_ctc                 : req.body.exp_ctc,
            email                   : req.body.email,
            contactNumber           : req.body.contactNumber,
            position                : req.body.position,
            resume                  : req.body.resume,
            skills                  : req.body.skills,
            noticePeriod            : req.body.noticePeriod,
            createdAt               : new Date(),  

        });
        
        jobform.save()
            .then(data=>{
                console.log("data--->",data);
                    res.status(200).json({
                                        message : "JOBFORM_INSERTED",
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
exports.list_jobform = (req,res,next)=>{
    Jobform.find()
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
exports.fetch_one = (req,res,next)=>{
    Jobform.findOne({"_id":req.params.fetchId})
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

exports.update_jobform = (req,res,next)=>{
    Jobform.updateOne(

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
exports.delete_jobform = (req,res,next)=>{
    Jobform.deleteOne({"_id":req.params.form_id})
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
exports.delete_all_forms = (req,res,next)=>{
    Jobform.deleteMany({})
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