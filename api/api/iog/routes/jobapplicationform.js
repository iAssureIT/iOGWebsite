const express 	        = require("express");
const router 	        = express.Router();
const checkAuth         = require('../../coreAdmin/middlerware/check-auth.js');
const ApplformController = require('../controllers/jobapplicationform.js');

router.post('/post'                , ApplformController.create_jobapplicationform);
router.get('/get/list'             , ApplformController.list_jobapplicationform);
router.get('/get/one/:fetchId'     , ApplformController.fetch_one);
router.patch('/update/:form_id'    , ApplformController.update_jobappication);
router.delete('/delete/:form_id'   , ApplformController.delete_jobapplication);
router.delete('/delete/all'        , ApplformController.delete_all_applicationforms);



module.exports = router;