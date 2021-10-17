const express = require("express");
const router = express.Router();

const ClotheslistController = require("../../app/controllers/admin/ClotheslistControllers");


router.delete("/:id", ClotheslistController.delete);
router.get("/:id/edit", ClotheslistController.edit);
router.put("/:id", ClotheslistController.update);
router.post("/store", ClotheslistController.store);
router.get("/create", ClotheslistController.create);
router.get("/", ClotheslistController.show);

module.exports = router;
