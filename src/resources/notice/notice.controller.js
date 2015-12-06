'use strict';

var Notice = require('../../model').Notice;

exports.create = function*(next) {
  yield Notice.create(this.request.body);
  this.body = {
    code: 200,
    msg: 'success'
  }
};

exports.findByPage = function*(next) {
  var page = 1;
  var query = {};
  if(typeof (this.params.page) === "number"){
    page = this.params.page;
  }
  var data = yield Notice.find(query).skip((page - 1) * 10).sort('-updated_at').limit(10);
  this.body = {
    code: 200,
    msg: '查询成功',
    data: data
  }
};
