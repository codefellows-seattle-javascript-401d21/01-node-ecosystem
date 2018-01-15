'use strict';

const arithmetic = require('../lib/arithmetic');
require('jest');

describe('Arithmetic Module', function(){
  describe('#add', function(){
    it('should return the sum of 2 numbers passed as arguments in the form of a single number or null if not passed 2 numbers', function(){
      expect(arithmetic.add(1, 1)).toEqual(2);
      expect(arithmetic.add('cat', 1)).toEqual(null);
      expect(arithmetic.add(1, 'dog')).toEqual(null);
    });
  });
  describe('#sub', function(){
    it('should return the difference of 2 numbers passed as arguments in the form of a single number or null if not passed 2 numbers', function(){
      expect(arithmetic.sub(1, 1)).toEqual(0);
      expect(arithmetic.sub(1, 'cat')).toEqual(null);
      expect(arithmetic.sub('dog', 1)).toEqual(null);
    });
  });
});