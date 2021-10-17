const express = require("express");
const router = express.Router();
const ClothesTypeController = require("../../app/controllers/admin/ClothesTypeControllers");


router.delete("/:id", ClothesTypeController.delete);
router.get("/:id/edit", ClothesTypeController.edit);
router.put("/:id", ClothesTypeController.update);
router.get("/createtype", ClothesTypeController.createtype);
router.post("/store", ClothesTypeController.store);
router.use("/", ClothesTypeController.show);

module.exports = router;





