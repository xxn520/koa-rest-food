var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 	name: {type: String, required: true},
 	email: {type: String, required: true},
 	password: {type: String, required: true},
  gender: {type: String, required: true},
 	grade: {type: Number, default: 0},
  token: {type: String},
	created_at: {type: Date, default: Date.now},
 	updated_at: {type: Date, default: Date.now}
});

UserSchema.index({_id: 1, updated_at: 1});

module.exports = mongoose.model('User', UserSchema);
