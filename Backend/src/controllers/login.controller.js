const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.models');

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // 🔍 Check user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // 🔐 Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    // 🎟️ Generate JWT token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ Send everything frontend needs
    res.status(200).json({
      message: "User login successfully",
      // token: token,
      // user: {
      //   username: user.username,
      //   email: user.email,
      //   isAdmin: user.isAdmin,
      //   hasVoted: user.hasVoted,
      //   votedParty: user.votedParty
      // }
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
}

module.exports = { loginUser };