'use strict';

const math = require('../lib/arithmetic.js');

describe ('Math Module', function(){
  describe('#Add', function(){
    it('should be a + b = c', function(){
      expect(math.add(3,5)).toEqual(8);
    });
    it ('should be `a` + `b` = null', function(){
      expect(math.add('3','5')).toEqual(null);
    });
  });
  describe('#Subtract', function(){
    it ('should be a - b = c', function(){
      expect(math.subtract(5,3)).toEqual(2);
    });
    it ('should be `a` - `b` = null', function(){
      expect(math.subtract('5','3')).toEqual(null);
    });
  });
});