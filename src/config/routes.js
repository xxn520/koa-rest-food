/**
 * Main application routes
 */

'use strict';

var mount = require('koa-mount');

module.exports = function(app) {

	// YEOMAN INJECT ROUTES BELOW
  app.use(mount('/', require('../resources/root')));
  app.use(mount('/tags', require('../resources/tag')));
  app.use(mount('/notices', require('../resources/notice')));
  app.use(mount('/comments', require('../resources/comment')));
  app.use(mount('/foods', require('../resources/food')));

};
