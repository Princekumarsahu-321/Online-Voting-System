require('dotenv').config();
const express=require('express');
const userModel=require('./src/models/user.models')
const authRoutes=require('./src/routes/auth.routes')
const loginRoutes=require('./src/routes/login.routes')
const logoutRoutes=require('./src/routes/logout.routes')
const candidateRoutes=require('./src/routes/candidate.routes')
const verifyRoutes =require("./src/routes/verify.routes");
// const voteRoutes = require('./src/routes/vote.routes');
// const sendMessage=require('./src/routes/message.routes')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/auth',loginRoutes)
app.use('/api/auth', logoutRoutes)
app.use('/api/auth', candidateRoutes)
app.use('/api/auth', verifyRoutes)
// app.use('/api/auth', voteRoutes);
// app.use('/api/auth', sendMessage);

app.post("/api/vote", async (req, res) => {
  try {
    const { party } = req.body;

    const user = await userModel.findById(req.user.id);

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

app.get("/user/status", async (req, res) => {
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

app.get("/api/user/me", async (req, res) => {
  try {
    // const users = await users.findById(req.user.id);
    const users = await userModel.findOne();

    res.json({
      username: users.username,
      email: users.email,
      isAdmin: users.isAdmin,
      hasVoted: users.hasVoted,
      votedParty: users.votedParty
    });

  } catch (err) {
    res.status(500).json({ error: err.message,data:user });
  }
});


app.get('/admin', async (req, res) => {
  try {
    const users = await userModel.find();

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

app.post("/api/:contact", (req, res) => {
  
  try {
    console.log(req.body);
    res.status(200).json({ message: "Message send" });


  } catch (error) {
    res.status(500).json({
      message: "Internal server error"
    });
  }
});

app.get("/admin/:contact", (req, res) => {
  
  try {
    console.log(req.body);
    res.status(200).json({ message: "Message received" });


  } catch (error) {
    res.status(500).json({
      message: "Internal server error"
    });
  }
});


module.exports=app 