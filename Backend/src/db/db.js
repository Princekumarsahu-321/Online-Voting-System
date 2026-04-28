const mongoose=require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoose connect");
        
    }catch(error){
        console.log("mongoose error");
        
    }
}

module.exports=connectDB