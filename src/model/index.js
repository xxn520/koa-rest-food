var mongoose = require('mongoose');
var config = require('../config/environment').mongodb;

mongoose.connect(config.url, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.url, err.message);
    process.exit(1);
  }
});

exports.User = require('./user');
exports.Tag = require('./tag');
exports.Comment = require('./comment');
exports.Food = require('./food');
exports.Notice = require('./notice');
