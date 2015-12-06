'use strict';

var controller = require('./root.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.post('/repassword', controller.repassword);
module.exports = router.routes();
