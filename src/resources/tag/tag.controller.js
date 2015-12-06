/**
 * Created by yunpeng on 15/12/6.
 */
'use strict';
var Tag = require('../../model').Tag;

exports.create = function*(next) {
  yield Tag.create(this.request.body);
  this.body = {
    code: 200,
    msg: 'success'
  }
};

exports.findByFoodId = function*(next) {
  var query = {};
  if(this.params.food_id){
    query.food_id = this.params.food_id;
  }else{
    this.redirect('/?msg='+'参数错误');
  }
  var tag = yield Tag.find(query);
  if(tag){
    this.body = {
      code: 200,
      msg: '查询成功',
      data: tag
    }
  }else{
    this.redirect('/?msg='+'没有标签');
  }
};

exports.update = function*(next) {
  var query = {};
  if(this.params.food_id){
    query.food_id = this.params.food_id;
  }else{
    this.redirect('/?msg='+'参数错误');
  }
  var tag = yield Tag.find(query);
  if(tag){
    tag.good += this.params.good;
    tag.bad += this.params.bad;
    tag.Psalty += this.params.Psalty;
    tag.Ptaste += this.params.Ptaste;
    tag.Pfresh += this.params.Pfresh;
    tag.Pnooil += this.params.Pnooil;
    tag.Pfew += this.params.Pfew;
    tag.Poil += this.params.Poil;
    yield Tag.update({_id: tag._id}, tag);
  }else{
    tag = new Tag({
      good: this.params.good,
      bad: this.params.bad,
      Psalty: this.params.Psalty,
      Ptaste: this.params.Ptaste,
      Pfresh: this.params.Pfresh,
      Pnooil: this.params.Pnooil,
      Pfew: this.params.Pfew,
      Poil: this.params.Poil,
      food_id: this.params.food_id
    });
    yield tag.save();
  }
  this.body = {
    code: 200,
    msg: '评价成功!',
    data: tag
  }
};

