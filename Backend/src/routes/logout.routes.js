const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const { logoutUser } = require("../controllers/logout.controller");

router.post("/logout", authMiddleware, logoutUser);

module.exports = router;