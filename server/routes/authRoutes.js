//#routes/authRoutes.js
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user");
const SuperUser = require("../models/superuser");
const { generateAuthToken } = require("../utils/auth");

//@post api login
router.post("/login", async (req, res) => {
  try {
    const { email, password, hospitalName, phoneNumber, hospitalOwner } =
      req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ email });

    if (!user) {
      // User not found in the User collection; check the SuperUser collection
      const superuser = await SuperUser.findOne({ email });
      if (!superuser) {
        // Neither a user nor a superuser with the provided email exists
        console.log("Email not found");
        return res
          .status(401)
          .json({ message: "Email or password is incorrect" });
      }

      // Compare the provided password with the stored, hashed password for superuser
      const passwordMatch = await bcrypt.compare(password, superuser.password);

      if (!passwordMatch) {
        console.log("Password does not match");
        return res
          .status(401)
          .json({ message: "Email or password is incorrect" });
      }

      if (hospitalOwner) {
        if (
          superuser.hospitalName !== hospitalName ||
          superuser.phoneNumber !== phoneNumber
        ) {
          console.log("Hospital name or phone number is incorrect");
          return res
            .status(401)
            .json({ message: "Email or password is incorrect" });
        }
      }

      // Generate a token for the superuser
      const token = generateAuthToken(superuser);

      // Set the authentication cookie with the token using res.cookie
      res.cookie("authToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 3600 * 1000), // Expires in 7 days
        path: "/",
      });

      // Send the token as a JSON response
      res.json({ token });

      console.log("Login successful for:", superuser.email);
    } else {
      // Generate a token for the user
      const token = generateAuthToken(user);

      // Set the authentication cookie with the token using res.cookie
      res.cookie("authToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 3600 * 1000), // Expires in 7 days
        path: "/",
      });

      // Send the token as a JSON response
      res.json({ token });

      console.log("Login successful for:", user.email);
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//@post api signup
router.post("/signup", async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      userType,
      hospitalName,
      address,
      phoneNumber,
    } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password before storing it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user based on the "userType"
    let newUser;
    if (userType === "normal") {
      newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
    } else if (userType === "hospital") {
      newUser = new SuperUser({
        username,
        email,
        password: hashedPassword,
        hospitalName,
        address,
        phoneNumber,
      });
    }

    // Save the user data to the respective collection (User or SuperUser)
    await newUser.save();

    res.json({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
//@get api signup dependent for username checking
router.get("/check-username", async (req, res) => {
  try {
    const { username } = req.query;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking username availability:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
