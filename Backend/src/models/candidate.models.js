const mongoose=require('mongoose')

const candidateSchema = new mongoose.Schema({
  name: String,
  party: String,
  // votes:String,
  votes: { 
    type: Number, 
    default: 0
  }
});

const candidateModel=mongoose.model("Candidate", candidateSchema);
module.exports = candidateModel 