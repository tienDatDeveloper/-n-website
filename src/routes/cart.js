const express = require("express");
const router = express.Router();
const cartController = require("../app/controllers/CartControllers");

router.get("/cart", cartController.show);

module.exports = router;
