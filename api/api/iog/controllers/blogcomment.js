const mongoose          = require("mongoose");
var ObjectID            = require('mongodb').ObjectID;
const Blogcomment       = require('../models/blogcomment.js');

exports.create_blogcomment = (req, res, next) => {
    console.log("inside comment");

        const blogcomment   = new Blogcomment({

            _id           :  new mongoose.Types.ObjectId(), 
            block_id      : req.body.block_id,
            name          : req.body.name,
            email         : req.body.email, //(CK Editor Rich text)
            comment       : req.body.comment,
            reply         : req.body.reply,
            replies       : {
                                name      : req.body.name,
                                email     : req.body.email,
                                reply     : req.body.reply,
                              },
            createdAt     : new Date(),     
        });
        
        blogcomment.save()
            .then(data=>{
                console.log("data--->",data);
                    res.status(200).json({
                                        message : "BlOG_COMMENT_INSERTED",
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
exports.list_comment = (req,res,next)=>{
    Blogcomment.find()
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
exports.update_comment = (req,res,next)=>{
    Blogcomment.updateOne(

                        { "_id":req.params.comment_id},    
                        
                        {
                            $set:{
                                "block_id"      : req.body.block_id,
                                "name"          : req.body.name,
                                "email"         : req.body.email, //(CK Editor Rich text)
                                "comment"       : req.body.comment,
                                "replies"       :
                                             {
                                                name      : req.body.name,
                                                email     : req.body.email,
                                                reply     : req.body.reply,
                                              },
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

exports.delete_comment = (req,res,next)=>{
    Blogcomment.deleteOne({"_id":req.params.comment_id})
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
exports.delete_all_comments = (req,res,next)=>{
    Blogcomment.deleteMany({})
        .exec()
        .then(data=>{
            res.status(200).json("All comments deleted");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};