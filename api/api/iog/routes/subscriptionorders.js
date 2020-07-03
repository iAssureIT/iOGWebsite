const express 			= require("express");
const router 			= express.Router();
const checkAuth     	= require('../../coreAdmin/middlerware/check-auth.js');
const OrderController 	= require('../controllers/subscriptionorders.js');

router.post('/post', OrderController.create_order);
router.post('/post/offering', OrderController.offering_order);
router.get('/get/statusactive', OrderController.fetch_order_list_active_status);
router.get('/get/status/user/:userID', OrderController.fetch_order_list_user_status);
router.get('/get/all/:pageno', OrderController.fetch_order_all);
router.get('/get/all/:userID/:pageno', OrderController.fetch_order_all_user);
router.get('/get/type/:type/:pageno', OrderController.fetch_order_type);
router.get('/get/type/:type/:userID/:pageno', OrderController.fetch_order_type_user);
router.get('/get/:ID', OrderController.fetch_order);
router.patch('/patch/:ID', OrderController.patch_order);
router.patch('/patch/blogs/:orderID', OrderController.patch_order_blog);
router.patch('/patch/statement/:action/:orderID', OrderController.patch_order_statement);
router.delete('/delete/:ID', OrderController.delete_order);

module.exports = router;