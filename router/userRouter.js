const express = require("express");
const { registerUsers } = require("../controller/userController");
const router = express.Router;
router.route("/register").post(registerUsers);
module.exports = router;
