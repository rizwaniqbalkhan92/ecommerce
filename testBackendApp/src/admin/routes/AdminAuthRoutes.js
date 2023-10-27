const express=require('express');
const { registerUserAdmin, loginUserAdmin } = require('../controllers/adminUser');
const router=express.Router()


router.post('/register',registerUserAdmin);
router.post('/login',loginUserAdmin);



module.exports=router