const express 	        = require("express");
const router 	        = express.Router();
const checkAuth         = require('../../coreAdmin/middlerware/check-auth.js');
const JobformController = require('../controllers/jobform.js');

router.post('/post'                , JobformController.create_jobform);
router.get('/get/list'             , JobformController.list_jobform);
router.get('/get/one/:fetchId'     , JobformController.fetch_one);
router.delete('/delete/all'        , JobformController.delete_all_forms);
router.patch('/update/:form_id'    , JobformController.update_jobform);
router.delete('/delete/:form_id'   , JobformController.delete_jobform);


module.exports = router;