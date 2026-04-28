const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    hasVoted:{
        type: Boolean,
        default: false

    },
    votedParty: {
        type: String,
        default: false,
    },

    isAdmin:{
        type: Boolean,
        default: false 

    }
})

const userModel=mongoose.model("user",userSchema)
module.exports=userModel