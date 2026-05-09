require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// ✅ Models
const User = require("./src/models/user.models");
const Candidate = require("./src/models/candidate.models");

// ✅ Routes
const authRoutes = require("./src/routes/auth.routes");
const loginRoutes = require("./src/routes/login.routes");
const logoutRoutes = require("./src/routes/logout.routes");
const candidateRoutes = require("./src/routes/candidate.routes");
const verifyRoutes = require("./src/routes/verify.routes");

// ✅ Middleware
const authMiddleware = require("./src/middleware/auth");

const app = express();

// ✅ Middlewares
app.use(express.static("public"));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/auth", loginRoutes);
app.use("/api/auth", logoutRoutes);
app.use("/api/auth", candidateRoutes);
app.use("/api/auth", verifyRoutes);

// ================== PROFILE ==================
app.get("/api/auth/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.log("PROFILE ERROR:", error);
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// ================== VOTE ==================
app.post("/api/vote", authMiddleware, async (req, res) => {
  try {
    const { party } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🚫 Already voted
    if (user.hasVoted) {
      return res.status(400).json({ message: "You already voted!" });
    }

    // ✅ Save vote
    user.hasVoted = true;
    user.votedParty = party;

    await user.save();

    res.json({ message: `Voted for ${party} successfully` });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================== USER STATUS ==================
app.get("/api/user/status", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json({
      hasVoted: user.hasVoted,
      votedParty: user.votedParty,
    });

  } catch (error) {
    res.status(500).json({ message: "Error fetching status" });
  }
});

// ================== CANDIDATES ==================
app.get("/api/auth/candidates", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================== CURRENT USER ==================
app.get("/api/user/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ================== ADMIN ==================
app.get("/admin", async (req, res) => {
  try {
    // if (!req.user.isAdmin) {
    //   return res.status(403).json({ message: "Access denied" });
    // }

    const users = await User.find();

    res.status(200).json({
      message: "All users fetched successfully",
      data: users
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal server error"
    });
  }
});

// ================== CONTACT ==================
app.post("/api/contact", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: "Message sent" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;