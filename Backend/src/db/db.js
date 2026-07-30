const mongoose=require('mongoose');
require("dotenv").config();

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        // await mongoose.connect(MONGO_URL_ON="mongodb+srv://princestm321_db_user:D4aJ4ZCoe2eKUrRD@cluster0.ggcudsf.mongodb.net/DATA");
        console.log("mongoose connect");
        
    }catch(error){
        console.log("mongoose error");
        
    }
}

module.exports=connectDB