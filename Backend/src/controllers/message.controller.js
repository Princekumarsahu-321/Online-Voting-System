const Message = require("../models/message.model");

const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 🔍 Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        msg: "All fields are required"
      });
    }

    // 📦 Save to DB
    const newMessage = new Message({
      name,
      email,
      message
    });

    await newMessage.save();

    res.status(201).json({
      msg: "Message sent successfully ✅",
      data: newMessage
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server error"
    });
  }
};

module.exports = { sendMessage };
