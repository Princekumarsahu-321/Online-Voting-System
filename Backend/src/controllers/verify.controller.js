const bcrypt = require('bcrypt');
const userModel = require('../models/user.models');

async function verifyUser(req, res) {
  try {
    const { email, voterKey, password, image } = req.body;

    // 🔍 find user with email + voterKey
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Invalid email or voterKey"
      });
    }

    // 🔐 compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    // ✅ success response with user data
    res.status(200).json({
      message: "User verified successfully",
      user: {
        email: user.email,
        voterKey: user.voterKey,
        image: user.image
      }
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
}

module.exports = { verifyUser };