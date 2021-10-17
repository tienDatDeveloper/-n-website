const express = require("express");
const router = express.Router();
const LoginController = require("../app/controllers/LoginControllers");

router.get("/login", LoginController.login);
router.get("/register", LoginController.register);

module.exports = router;
