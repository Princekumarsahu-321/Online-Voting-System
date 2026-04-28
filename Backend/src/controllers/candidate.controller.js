const userModel = require('../models/user.models');
const candidateModel = require('../models/candidate.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function candidate(req, res) {
    try {
        const { name, party } = req.body;

        if (!name || !party  === undefined) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const candidate = await candidateModel.create({ 
            name,
            party
        });

        res.status(201).json({
            message: "Candidate registered successfully",
            candidate
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error + " Internal Server Error"
        });
    }
}

module.exports = { candidate };