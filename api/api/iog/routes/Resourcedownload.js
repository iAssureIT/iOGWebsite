const express 	        = require("express");
const router 	        = express.Router();
const checkAuth         = require('../../coreAdmin/middlerware/check-auth.js');
const downloadController = require('../controllers/Resourcedownload.js');

router.post('/post'                , downloadController.create_download);
router.get('/get/list'             , downloadController.list_download);
router.get('/get/one/:fetchId'     , downloadController.fetch_download);
router.delete('/delete/all'        , downloadController.delete_all_download);
router.patch('/update/:form_id'    , downloadController.update_download);
router.delete('/delete/:form_id'   , downloadController.delete_download);


module.exports = router;