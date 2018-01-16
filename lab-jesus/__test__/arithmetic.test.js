'use strict';

const arithmetic = require('../lib/arithmetic');
require('jest');

describe('Arithmetic Module', function() {
  describe('#Add', function() {
    it('should take in a two numbers and return the sum', function() {
      expect(arithmetic.add(1,2)).toEqual(3);
    });

    it('should validate that the input is a numeric value', function() {
      expect(arithmetic.add('1','2')).toBe(null);
    });
  });
  describe('#Subtract', function() {
    it('should take in a two numbers and return the difference', function() {
      expect(arithmetic.sub(3,2)).toEqual(1);
    });

    it('should validate that the input is a numeric value', function() {
      expect(arithmetic.sub('1','2')).toEqual(null);
    });
  });
});
