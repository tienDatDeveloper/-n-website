const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clothe = new Schema({
  name: { type: String, maxLength: 255 },
  idadmin: { type: String, maxLength: 255 },
  price: { type: String, maxLength: 600 },
  img: { type: String, maxLength: 255 },
  img1: { type: String, maxLength: 255 },
  img2: { type: String, maxLength: 255 },
  slug: { type: String, maxLength: 255 },
  discription: { type: String, maxLength: 1000 },
  img3: { type: String, maxLength: 255 },
  discount: { type: String, maxLength: 255 },
  color1: { type: String, maxLength: 255 },
  color2: { type: String, maxLength: 255 },
  color3: { type: String, maxLength: 255 },
  createAt: { type: Date, defaule: Date.now },
  updateAt: { type: Date, defaule: Date.now },
});
module.exports = mongoose.model("Clothe", Clothe, "clothes");
