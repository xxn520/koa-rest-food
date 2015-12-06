'use strict';
var User = require('../../model').User;
var crypto = require('crypto');

// Get list of roots
exports.index = function*(next) {
  var msg = 'API Docs URL';
  var code = 200;
  if(this.request.query){
    msg = this.request.query.msg;
    code = 500;
  }
	this.status = 403;
  this.body = {
  	code : code,
  	msg : msg
  };
};

// 注册
exports.signup = function*(next){
  var data = this.request.body;
  var msg = '注册成功!';

  var userExist = yield User.find({name: data.name});
  if (userExist) {
    msg = '已存在该用户名的用户!';
    this.redirect('/?msg='+msg);
  }

  data.password = md5(data.password);
  data.token = new Buffer(data.name+':'+data.password).toString("base64");
  var userInfo = yield User.create(data);
  userInfo.token = null;

  this.body = {
    code: '200',
    msg: msg,
    data: userInfo
  };
};

// 登录
exports.signin = function*(next){
  var data = this.request.body;
  var msg = '登录成功!';

  var user = yield User.find({name: data.name});
  if(user.password === md5(data.password)){
    user.token = null;
    this.body = {
      code: '200',
      msg: msg,
      data: user
    };
  }else{
    msg = '密码错误!';
    this.redirect('/?msg='+msg);
  }

};

function md5 (str) {
  return crypto.createHash('md5').update(str).digest('hex');
}
