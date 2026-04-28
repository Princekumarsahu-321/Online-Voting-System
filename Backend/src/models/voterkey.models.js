const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    voterKey:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image: {
       type:String,
       default: ""

    }
})

const userModel=mongoose.model("user",userSchema)
module.exports=userModel
