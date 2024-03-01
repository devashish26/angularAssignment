const {Router} = require('express');
const admincontroller = require('./controller');

const router = Router();

router.get('/getadmins', admincontroller.getadmins)
router.get('/count', admincontroller.getcount)

module.exports = router