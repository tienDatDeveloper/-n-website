const Clothe = require("../models/Clothe");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../utill/mongoose");

class ClotheControllers {
  show(req, res, next) {
    Clothe.find({})
      .then((clothe) =>
        res.render("home", {
          clothe: mutipleMongooseToObject(clothe),
        })
      )
      .catch(next);
  }

  slug(req, res, next) {
    Clothe.findOne({ slug: req.params.slug })
      .then((clothe) =>
        res.render("clothes/show", { clothe: mongooseToObject(clothe) })
      )
      .catch(next);
  }

  create(req, res) {
    res.render("clothes/create");
  }

  store(req, res, next) {
    const clothes = new Clothe(req.body);
    clothes.save();
  }
}
module.exports = new ClotheControllers();
