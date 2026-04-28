const express=require('express')
const candidateController=require('../controllers/candidate.controller')
const router=express.Router()

router.post('/candidate',candidateController.candidate)

module.exports=router 