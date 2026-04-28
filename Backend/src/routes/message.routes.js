const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/message.controller");

router.post("/contact", sendMessage);

module.exports = router;
