const express=require('express')
const verifyController=require('../controllers/verify.controller')
const router=express.Router()

router.post('/verify',verifyController.verifyUser)


module.exports=router   
