const fileReadController = require('../controller/fileReadController');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const router =require('express').Router();
router.route('/readfile').post(upload.single('file'),fileReadController.readCsvFile);
module.exports = router;