const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator');

const ClothesType = new Schema({
    nametype: { type: String, required: true, },
});

module.exports = mongoose.model('ClothesType', ClothesType, 'clothestype');
