/**
 * Created by yunpeng on 15/12/6.
 */
'use strict';

var app = require('../../server');
var request = require('supertest').agent(app.listen());

var expect = require('chai').expect;
var should = require('should');

describe('POST /tags', function(){
  it('should respond with 200', function(done){
    request
      .post('/tags')
      .type('form')
      .send({
        name: 'test'
      })
      .expect(401, done);
  });
});
