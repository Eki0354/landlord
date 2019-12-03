const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  account: {
    type: String,
    minlength: 6,
    maxlength: 16,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 4,
    maxlength: 20,
    required: true
  },
  role: {
    type: Number,
    min: 0,
    max: 9,
    default: 0,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};
