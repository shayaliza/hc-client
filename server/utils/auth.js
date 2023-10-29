//#utils/auth.js
const jwt = require("jsonwebtoken");

function generateAuthToken(user) {
  const payload = {
    userId: user._id,
  };
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secretKey, {
    expiresIn: "7d",
  });
  return token;
}

module.exports = { generateAuthToken };
