'use strict';

const math = require('../lib/arithmetic');

describe('Arithmetic Module', function() {
  describe('#Add', function() {
    it('Test each method for proper use', function() {
      expect(math.add(3,5)).toEqual(8);
    });

    it('Test each method for improper use', function() {
      expect(math.add('1','2')).toEqual('improper use');
    });
  });
  describe('#Subtract', function() {
    it('Test each method for proper use', function() {
      expect(math.subtract(3,5)).toEqual(2);
    });

    it('Test each method for improper use', function() {
      expect(math.subtract('1','2')).toEqual('improper use');
    });
  });
});

