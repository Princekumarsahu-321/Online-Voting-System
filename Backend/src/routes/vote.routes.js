const express = require("express");
const router = express.Router();

const voteController = require("../controllers/vote.controller");
const authMiddleware = require("../middleware/auth.middleware");

// 🗳️ Protected vote route
router.post("/vote", authMiddleware, voteController.vote);

module.exports = router; 