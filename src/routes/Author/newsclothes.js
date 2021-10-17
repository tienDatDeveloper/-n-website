const express = require("express");
const router = express.Router();
const NewsController = require("../../app/controllers/admin/NewsControllers.js");

// router.post("/store", NewsController.store);
router.get("/create", NewsController.create);
router.use("/", NewsController.show);

module.exports = router;





