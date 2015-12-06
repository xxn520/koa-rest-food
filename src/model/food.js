var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var FoodSchema = new Schema({
	name: {type: String, require: true},
	price: {type: Number, require: true},
	pic_url: {type: String, require: true},
  intro: {type: String, require: true},
	tab: {type: Number, default: 1},//1早餐，2午餐，3晚餐
	comment: {type: Number, default: 0},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

FoodSchema.index({_id:1, update_at: 1});

module.exports = mongoose.model('Food', FoodSchema);
