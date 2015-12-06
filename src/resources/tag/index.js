/**
 * Created by yunpeng on 15/12/6.
 */
/**
 * Created by yunpeng on 15/12/6.
 */
'use strict';

var controller = require('./tag.controller');
var router = require('koa-router')();

router.get('/:food_id', controller.findByFoodId);
router.post('/', controller.create);
router.post('/:food_id', controller.update);
module.exports = router.routes();
