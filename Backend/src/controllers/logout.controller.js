const userModel = require("../models/user.models");

async function logoutUser(req, res) {
  try {
    const user = await userModel.findById(req.user.id);

    if (user) {
      user.isLogin = false;
      await user.save();
    }

    res.clearCookie("token");

    res.status(200).json({
      message: "Logout Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = { logoutUser };