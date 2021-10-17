const {
    mongooseToObject,
    mutipleMongooseToObject,
  } = require("../../../utill/mongoose");
  
  class typeClothesControllers {
    show(req, res) {
      res.render("Adv/advclothes", { layout: "admain" });
    }
  
    create(req, res) {
      res.render("Adv/create", { layout: "admain" });
    }
  }
  module.exports = new typeClothesControllers();
  