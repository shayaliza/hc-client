// model/superuser.js
const mongoose = require("mongoose");

const superUserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  hospitalName: String,
  address: String,
  phoneNumber: String,
});

module.exports = mongoose.model("SuperUser", superUserSchema);
