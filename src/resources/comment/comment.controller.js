'use strict';

var Comment = require('../../model').Comment;

exports.create = function*(next) {
  yield Comment.create(this.request.body);
  this.body = {
    code: 200,
    msg: 'success'
  }
};

