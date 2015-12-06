/**
 * Koa config
 */

'use strict';

var config = require('./environment');
var morgan = require('koa-morgan');
var bodyParser = require('koa-bodyparser');
var errorhandler = require('koa-errorhandler');
var statelessauth = require('koa-statelessauth');
var User = require('../model').User;

module.exports = function(app) {
  var validator = {
    validate: function (token) {
      var user = User.find({token: token}).select('name', 'password', 'email', 'gender', 'grade');
      if (user) {
        return user;
      }
      return;
    }
  };
  var statelessauthOptions = {
    ignorePaths: ['/', '/signup', 'signin']
  };
  // error handle
  app.use(errorhandler());
  // BodyParser
  app.use(bodyParser());
  // Logger
  app.use(morgan.middleware(config.logType));
  // httpbasic
  app.use(statelessauth(validator, statelessauthOptions));

};
