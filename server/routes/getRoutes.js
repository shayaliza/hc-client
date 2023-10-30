//#routes/getRoutes.js
const express = require("express");
const router = express.Router();
const SuperUser = require("../models/superuser");
const User = require("../models/user");
const Doctor = require("../models/doctor");
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

// Define a route to save doctor data
router.post("/upload-doctor", async (req, res) => {
  try {
    const doctorData = req.body; // Assuming the request body contains the doctor data

    // Create a new doctor document using the Doctor model and save it to the database
    const newDoctor = new Doctor(doctorData);
    await newDoctor.save();

    // Return a success message or the saved doctor data if needed
    res
      .status(201)
      .json({ message: "Doctor data saved successfully", data: newDoctor });
  } catch (error) {
    console.error("Error saving doctor data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/get-all-doctors", async (req, res) => {
  try {
    // Find all doctors in the Doctor collection
    const doctors = await Doctor.find();

    if (!doctors || doctors.length === 0) {
      return res.status(404).json({ message: "No doctors found" });
    }

    // Return the list of doctors
    res.json(doctors);
  } catch (error) {
    console.error("Error getting all doctors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// router.get("/doctors/:hospitalName", async (req, res) => {
//   try {
//     const { hospitalName } = req.params;

//     // Find all doctors with the specified hospital name
//     const doctors = await Doctor.find({ hospitalName });

//     if (!doctors || doctors.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "No doctors found for this hospital" });
//     }

//     // Return the list of doctors
//     res.json(doctors);
//   } catch (error) {
//     console.error("Error getting doctors by hospital name:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// router.get("/doctors/:hospitalName", async (req, res) => {
//   try {
//     const { hospitalName } = req.params;

//     // Check if the hospital name exists in your database
//     const hospital = await SuperUser.findOne({ hospitalName });

//     if (!hospital) {
//       return res.status(404).json({ message: "Hospital not found" });
//     }

//     // Find all doctors with the specified hospital name
//     const doctors = await Doctor.find({ hospitalName });

//     // Return the list of doctors
//     res.json(doctors);
//   } catch (error) {
//     console.error("Error getting doctors by hospital name:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.get("/doctors/:hospitalName", async (req, res) => {
  try {
    const { hospitalName } = req.params;

    // Check if the hospital name exists in your database
    const hospital = await SuperUser.findOne({ hospitalName });

    if (!hospital) {
      console.log("Hospital not found:", hospitalName);
      return res.status(404).json({ message: "Hospital not found" });
    }

    // Find all doctors with the specified hospital name
    const doctors = await Doctor.find({ hospitalName });

    // Log the number of doctors found
    console.log(
      `Found ${doctors.length} doctors for hospital: ${hospitalName}`
    );

    // Return the list of doctors
    res.json(doctors);
  } catch (error) {
    console.error("Error getting doctors by hospital name:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
