const express 	= require("express");
const router 	= express.Router();
const checkAuth     = require('../../coreAdmin/middlerware/check-auth.js');
const CommentController = require('../controllers/blogcomment.js');

router.post('/post'                , CommentController.create_blogcomment);
router.get('/get/list'             , CommentController.list_comment);
router.patch('/update/:comment_id' , CommentController.update_comment);
router.delete('/delete/all'        , CommentController.delete_all_comments);
router.delete('/delete/:comment_id', CommentController.delete_comment);


module.exports = router;