'use strict';

const math = require('../lib/arithmetic');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('Test each method for proper use', function() {
      expect(math.add(5,3)).toEqual(8);
    });

    it('Test each method for improper use', function() {
      expect(math.add('1','2')).toEqual(null);
    });
  });

  describe('#subtract', function() {
    it('Test each method for proper use', function() {
      expect(math.subtract(5,3)).toEqual(2);
    });

    it('Test each method for improper use', function() {
      expect(math.subtract('1','2')).toEqual(null);
    });
  });
});

