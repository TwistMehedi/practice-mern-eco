const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/usersModels");

exports.registerUsers = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is id",
      url: "profile url",
    },
  });
  res.status(201).json({
    success: true,
    user,
  });
});
