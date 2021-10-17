const Login = require("../models/Clothe");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../utill/mongoose");

class LoginControllers {
  login(req, res) {
    res.render("login/login");
  }

  register(req, res) {
    res.render("login/register");
  }
}
module.exports = new LoginControllers();
