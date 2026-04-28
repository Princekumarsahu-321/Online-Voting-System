const userModel = require('../models/user.models');
const candidateModel=require('../models/candidate.models')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
          return res.status(400).json({
          message: "All fields are required"
          });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        });

        

        
        const token = jwt.sign(
           { id: user._id },
            process.env.JWT_SECRET,
           { expiresIn: "1d" }
        );

        res.cookie("token", token, {
           
        });

        res.status(201).json({
            message: "User registered successfully ",
            // user
            
        });

    } catch (error) {
        if (error.code === 11000 && error.keyPattern?.email) {
        return res.status(400).json({
            message: "Email duplicate"
        });
    }
        console.error(error);
        res.status(500).json({
            message: error+"Internal Server Error "
        });
    }
}

module.exports = { registerUser };