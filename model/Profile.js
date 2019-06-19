const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  bio: {
    type: String
  },
  year: {
    type: String
  },
  name: {
    type: String
  },
  school: {
    type: String
  },
  education: [
    {
      school: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  credential: {
    subjects: {
      type: Array,
      required: true
    },
    area: {
      type: String
    }
  },
  takenTest: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  career: {
    name: { type: String },
    code: { type: String }
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
