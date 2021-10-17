const {
    mongooseToObject,
    mutipleMongooseToObject,
  } = require("../../../utill/mongoose");
  
  class newsClothesControllers {
    show(req, res) {
      res.render("news/newsclothes", { layout: "admain" });
    }
  
    create(req, res) {
      res.render("news/create", { layout: "admain" });
    }
  }
  module.exports = new newsClothesControllers();
  