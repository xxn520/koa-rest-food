'use strict';

var controller = require('./comment.controller.js');
var router = require('koa-router')();

router.post('/', controller.create);
module.exports = router.routes();
