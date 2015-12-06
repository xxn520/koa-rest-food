var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var NoticeSchema = new Schema({
	title: {type: String, require: true},
	content: {type: String, require: true},
	pic_url: {type: String, require: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

NoticeSchema.index({_id:1, update_at: 1});

module.exports = mongoose.model('Notice', NoticeSchema);