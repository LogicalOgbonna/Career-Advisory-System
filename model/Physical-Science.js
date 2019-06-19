const mongoose = require("mongoose");

// Define schema
var Schema = mongoose.Schema;

var PhysicalScience = new Schema({
  dept: String,
  minimumGrade: { type: String, default: "C" },
  subjects: {}
});

// Compile model from schema
module.exports = mongoose.model("physicalsciences", PhysicalScience);
