'use strict';

var app = require('../../server');
var request = require('supertest').agent(app.listen());

var expect = require('chai').expect;
var should = require('should');


//describe('POST /comments', function(){
//  it('should respond with 200', function(done){
//    request
//      .post('/comments')
//      .type('form')
//      .send({
//        title: 'test',
//        content: 'test',
//        pic_url: 'http://i5.tietuku.com/5536e3a7e1e89ee7.jpg'
//      })
//      .expect(404, done);
//  });
//});
