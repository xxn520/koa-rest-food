'use strict';

var controller = require('./notice.controller.js');
var router = require('koa-router')();

router.post('/', controller.create);
router.get('/:page', controller.findByPage);
module.exports = router.routes();
