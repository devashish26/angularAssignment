const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getusers)
router.post('/',controller.adduser)
// router.get('/:id', controller.getuserbyid)






router.get('/heheboy', (req,res)=>{
    res.send('heheboyy');
})

module.exports = router;