//#routes/getRoutes.js
const express = require("express");
const router = express.Router();
const SuperUser = require("../models/superuser");
const User = require("../models/user");
const Cookies = require("js-cookie"); // Import the Cookies library

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

// router.get("/check-superuser", async (req, res) => {
//   try {
//     const userEmail = req.cookies.userEmail; // Get the user's email from the cookie

//     if (!userEmail) {
//       return res.status(401).json({ isSuperUser: false });
//     }

//     // Check if the user's email exists in the SuperUser collection
//     const superuser = await SuperUser.findOne({ email: userEmail });

//     if (superuser) {
//       return res.json({ isSuperUser: true });
//     } else {
//       return res.json({ isSuperUser: false });
//     }
//   } catch (error) {
//     console.error("Error checking superuser status:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// router.get("/check-superuser", async (req, res) => {
//   try {
//     const userEmail = req.cookies.userEmail; // Get the user's email from the cookie

//     if (!userEmail) {
//       return res.status(401).json({ isSuperUser: false });
//     }

//     // Check if the user's email exists in the User collection
//     const user = await User.findOne({ email: userEmail });

//     if (user && user.phoneNumber) {
//       return res.json({ isSuperUser: true });
//     } else {
//       return res.json({ isSuperUser: false });
//     }
//   } catch (error) {
//     console.error("Error checking superuser status:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// router.post("/check-superuser", async (req, res) => {
//   try {
//     const { email } = req.body; // Get the user's email from the request body

//     if (!email) {
//       return res.status(400).json({ isSuperUser: false });
//     }

//     // Check if the user's email exists in the User collection
//     const user = await User.findOne({ email });

//     if (user && user.phoneNumber) {
//       return res.json({ isSuperUser: true });
//     } else {
//       return res.json({ isSuperUser: false });
//     }
//   } catch (error) {
//     console.error("Error checking superuser status:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.post("/check-superuser", async (req, res) => {
  try {
    const { phoneNumber } = req.body; // Get the user's phone number from the request body

    if (!phoneNumber) {
      return res.status(400).json({ isSuperUser: false });
    }

    // Check if the user's phone number exists in the SuperUser collection
    const superuser = await SuperUser.findOne({ phoneNumber });

    if (superuser) {
      return res.json({ isSuperUser: true });
    } else {
      return res.json({ isSuperUser: false });
    }
  } catch (error) {
    console.error("Error checking superuser status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
