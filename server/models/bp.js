const mongoose = require("mongoose");

const BPRecordSchema = new mongoose.Schema({
  sysBP: Number,
  diaBP: Number,
  date: Date,
  userEmail: String,
});

// Create a model based on the schema
const BPRecord = mongoose.model("BPRecord", BPRecordSchema);

module.exports = BPRecord;
