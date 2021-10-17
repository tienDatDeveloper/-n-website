const express = require("express");
const router = express.Router();
const Clothestypelist = require("./clothestypelist");
const Clotheslist = require("./clotheslist");
const AdvClothes = require("./advclothes");
const NewsClothes = require("./newsclothes");
const adminController = require("../../app/controllers/admin/AdminControllers");

router.use("/clothestypelist", Clothestypelist);
router.use("/clotheslist", Clotheslist);
router.use("/adv", AdvClothes);
router.use("/news", NewsClothes);
router.get("/", adminController.show);

module.exports = router;
