const mongoose = require("mongoose");
const validator = require("validator");
const usersSchema = mongooseSchema({
  name: {
    type: String,
    required: [true, "please enter your name"],
    maxLength: [30, "name cannot exceed 30 characters"],
    minLength: [4, "giv me 4 charactere name"],
  },
  email: {
    type: String,
    required: [true, , "Please enter your email"],
    unique: true,
    validator: [validator.isEmail, "enter a valid email"],
  },
  password: {
    type: Sting,
    required: [true, "enter your password"],
    minLength: [6, "password must be 6 characters"],
    Select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
module.exports = new mongoose.model("user", usersSchema);
