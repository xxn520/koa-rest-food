'use strict';

var app = require('../../server');
var request = require('supertest').agent(app.listen());

var expect = require('chai').expect;
var should = require('should');


describe('POST /foods', function(){
  it('should respond with 200', function(done){
    request
      .post('/foods')
      .type('form')
      .send({
        title: 'test',
        content: 'test',
        pic_url: 'http://i5.tietuku.com/5536e3a7e1e89ee7.jpg'
      })
      .expect(401, done);
  });
});

//describe('get /foods/:tab/:page', function(){
//  it('should respond with 200', function(done){
//    request
//      .get('/foods/1/1')
//      .expect(200)
//      .expect('Content-Type','application/json; charset=utf-8')
//      .end(function(err,res){
//        if(err) throw err;
//        console.log(res.body);
//        done();
//      });
//  });
//});
