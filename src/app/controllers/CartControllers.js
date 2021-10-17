const Login = require("../models/Clothe");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../utill/mongoose");

class CartControllers {
  show(req, res) {
    res.render("cart/show");
  }
}
module.exports = new CartControllers();
