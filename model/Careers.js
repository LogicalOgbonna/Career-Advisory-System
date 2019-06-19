const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CareerSchema = new Schema({
  career: {
    type: Array,
    required: true
  }
});

module.exports = Career = mongoose.model("career", CareerSchema);
