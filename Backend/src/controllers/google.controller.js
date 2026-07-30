const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/user.models");

const client = new OAuth2Client(
  "47850225611-mgaf0pvnvi15e981pk6docgh09p4ee8h.apps.googleusercontent.com",
);

exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience:
        "47850225611-mgaf0pvnvi15e981pk6docgh09p4ee8h.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();

    let user = await User.findOne({ email: payload.email });

    if (!user) {
      user = await User.create({
        username: payload.name,
        email: payload.email,
        password: "GOOGLE_LOGIN",
        isLogin: true,
      });
    } else {
      user.isLogin = true;
      user.lastLogin = new Date();
      user.loginCount = (user.loginCount || 0) + 1;
      await user.save();
    }

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
    });

    res.json({
      message: "Google Login Successful",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Invalid Google Token",
    });
  }
};
