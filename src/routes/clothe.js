const express = require("express");
const router = express.Router();
const clotheController = require("../app/controllers/ClotheControllers");

router.get("/", clotheController.show);
router.use("/:slug", clotheController.slug);

module.exports = router;
