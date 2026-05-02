const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.models');

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ SEND TOKEN IN COOKIE
    res.cookie("token", token, {  
      httpOnly: true,
      secure: false, // true in production (https)
    });

    res.status(200).json({
      message: "User login successfully"  
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
}

module.exports = { loginUser };