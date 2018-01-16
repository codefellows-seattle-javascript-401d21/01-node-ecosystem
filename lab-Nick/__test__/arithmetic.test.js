'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic module', function(){
  describe('#NaN', function(){
    it('should return null for non-numbers', function(){
      expect(arithmetic.add(NaN)).toBeNull();
      expect(arithmetic.add('string')).toBeNull();
      expect(arithmetic.add([])).toBeNull();
      expect(arithmetic.sub(NaN)).toBeNull();
      expect(arithmetic.sub('string')).toBeNull();
      expect(arithmetic.sub([])).toBeNull();
    });
    describe('#AddsAndSubs', function(){
      it('should add and subtract when given two numbers as params', function(){
        expect(arithmetic.add(1, 2)).toBe(3);
        expect(arithmetic.sub(2, 1)).toBe(1);
      });
    });
  });
});
