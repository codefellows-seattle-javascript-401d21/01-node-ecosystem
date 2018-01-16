'use strict';

const math = require('../lib/arithmetic.js');

describe ('Math Module', function(){
  describe('#Add', function(){
    it('should be a + b = c', function (){
      expect(math.add(3,5)).toEqual(8);
    });
  });
});