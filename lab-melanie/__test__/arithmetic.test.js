'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic Module', function() {
  describe('#Arithmetic', function() {
    it('should take in two number arguments', function() {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });
    it('should return null if either argument is not a number', function() {
      expect(arithmetic.sub(1, 'cat')).toBeNull();
    });
  });
});
