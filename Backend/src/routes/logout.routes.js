const express=require('express')
const logoutControoler=require('../controllers/logout.controller')
const router=express.Router()

router.delete('/user/:id', logoutControoler.deleteUser)


module.exports=router