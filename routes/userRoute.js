const userApis = require('../controller/userController');
const router =require('express').Router();
router.route('/createUser').post(userApis.creatUser);
router.route('/getAllUser').get(userApis.fetchUser);
router.route('/userUpdate').put(userApis.updateUser);
router.route('/userDeleted').delete(userApis.deleteUser);
module.exports = router;