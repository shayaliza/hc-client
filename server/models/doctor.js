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
