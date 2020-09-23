const express 	        = require("express");
const router 	        = express.Router();
const checkAuth         = require('../../coreAdmin/middlerware/check-auth.js');
const contactformController = require('../controllers/contactModal.js');

router.post('/post'                , contactformController.create_contactModal);
router.get('/get/list'             , contactformController.list_contactform);
router.get('/get/one/:fetchId'     , contactformController.fetch_onecontactModal);
router.delete('/delete/all'        , contactformController.delete_all_formscontactModal);
router.patch('/update/:form_id'    , contactformController.update_contactModal);
router.delete('/delete/:form_id'   , contactformController.delete_contactModal);


module.exports = router;