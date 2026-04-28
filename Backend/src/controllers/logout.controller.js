const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../models/user.models');

async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID"
      });
    }

    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (error) {
    // console.error(error); 
    res.status(500).json({
      message: "Internal server error"
    });
  }
}

module.exports = { deleteUser };