const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require("../controllers/Auth");

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").post(resetpassword);

module.exports = router;
