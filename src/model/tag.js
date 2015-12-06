var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TagSchema = new Schema({
	good: {type: Number, default: 0},
  bad: {type: Number, default: 0},
  Psalty: {type: Number, default: 0},
  Ptaste: {type: Number, default: 0},
  Pfresh: {type: Number, default: 0},
  Pnooil: {type: Number, default: 0},
  Pfew: {type: Number, default: 0},
  Poil: {type: Number, default: 0},
  food_id: {type: ObjectId, require: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

TagSchema.index({_id:1, update_at: 1});

module.exports = mongoose.model('Tag', TagSchema);
