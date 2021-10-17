const express = require("express");
const router = express.Router();

const AdvController = require("../../app/controllers/admin/AdvControllers");

router.get("/create", AdvController.create);
router.get("/", AdvController.show);

module.exports = router;
