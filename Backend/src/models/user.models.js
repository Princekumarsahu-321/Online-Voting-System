const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    default: null,
  },
  hasVoted: {
    type: Boolean,
    default: false,
  },
  votedParty: {
    type: String,
    default: "",
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  isLogin: {
    type: Boolean,
    default: false,
  }
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
