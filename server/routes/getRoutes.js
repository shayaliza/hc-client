//#routes/getRoutes.js
const express = require("express");
const router = express.Router();
const SuperUser = require("../models/superuser");
const User = require("../models/user");

router.get("/superusers", async (req, res) => {
  try {
    // Find all superusers
    const superusers = await SuperUser.find({}, "hospitalName address");

    if (!superusers || superusers.length === 0) {
      return res.status(404).json({ message: "No superusers found" });
    }

    // Return the superuser details with hospital names and addresses
    res.json(superusers);
  } catch (error) {
    console.error("Error getting superuser details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET user details by username
router.get("/users/:username", async (req, res) => {
  try {
    const { username } = req.params;

    // Find the user by their username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user details
    res.json(user);
  } catch (error) {
    console.error("Error getting user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET superuser details by hospital name
router.get("/superusers/:hospitalName", async (req, res) => {
  try {
    const { hospitalName } = req.params;

    // Find the superuser by hospital name
    const superuser = await SuperUser.findOne({ hospitalName });

    if (!superuser) {
      return res.status(404).json({ message: "SuperUser not found" });
    }

    // Return the superuser details
    res.json(superuser);
  } catch (error) {
    console.error("Error getting superuser details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
