'use strict';

var Food = require('../../model').Food;

exports.create = function*(next) {
  yield Food.create(this.request.body);
  this.body = {
    code: 200,
    msg: 'success'
  }
};

exports.findByPageAndTab = function*(next) {
  var page = 1;
  var query = {};
  if(typeof (this.params.page) === "number"){
    page = this.params.page;
  }
  if(this.params.tab){
    query.tab = this.params.tab;
  }
  var data = yield Food.find(query).skip((page - 1) * 10).sort('-updated_at').limit(10);
  this.body = {
    code: 200,
    msg: '查询成功',
    data: data
  }
};

exports.findById = function*(next) {
  var query = {};
  var data;
  if(this.params.id){
    query._id = this.params.id;
  }
  data = yield Food.find(query);
  this.body = {
    code: 200,
    msg: '查询成功',
    data: data
  }
};
