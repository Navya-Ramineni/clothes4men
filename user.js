const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/signup", userController.postSignupDetails);

router.post("/login", userController.postLogin);

module.exports = router;
