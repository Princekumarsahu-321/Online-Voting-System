const express = require("express");
const router = express.Router();

const googleController = require("../controllers/google.controller");

router.post("/google", googleController.googleLogin);

module.exports = router;