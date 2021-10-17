const Login = require("../../models/Clothe");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../../utill/mongoose");

class AdminControllers {
  show(req, res) {
    res.render("admin/index", { layout: "admain" });
  }
}
module.exports = new AdminControllers();
