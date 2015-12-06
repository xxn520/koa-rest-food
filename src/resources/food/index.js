'use strict';

var controller = require('./food.controller.js');
var router = require('koa-router')();

router.get('/:tab/:page', controller.findByPageAndTab);
router.post('/', controller.create);
router.get('/:id', controller.findById);
module.exports = router.routes();
