// models/doctor.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  speciality: String,
  time: String,
  daysAvailable: String,
  hospitalName: String, // Assuming you want to associate doctors with hospitals
});

module.exports = mongoose.model("Doctor", doctorSchema);


// models/doctor.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  speciality: String,
  time: String,
  daysAvailable: String,
  hospitalName: String, // Assuming you want to associate doctors with hospitals
});

module.exports = mongoose.model("Doctor", doctorSchema);


const Doctor = require("../models/doctor"); // Import the Doctor model or replace it with the actual path to your doctor model
+