const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Candidate = require("../models/Candidate");
const verifyToken = require("../middleware/auth"); // JWT middleware

router.post("/vote", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id; // from JWT
    const { party } = req.body;

    const user = await User.findById(userId);

    if (user.hasVoted) {
      return res.status(400).json({
        message: "You already voted",
      });
    }

    const candidate = await Candidate.findOne({ party });

    if (!candidate) {
      return res.status(404).json({
        message: "Candidate not found",
      });
    }

    // 🗳️ Add vote
    candidate.votes += 1;
    await candidate.save();

    // 👤 Update user
    user.hasVoted = true;
    user.votedParty = party;
    await user.save();

    res.status(200).json({
      message: `Vote for ${party} successful`,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;