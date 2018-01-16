'use strict';

const greet = require('../lib/greet');

// This is a basic Jest assertion
//expect(math.floor(1.123)).not.toEqual(1.123)
//expect(math.floor(1.123)).toEqual(1)


describe('Greet Module', function() {
  describe('#Null', function() {
    it('expects the greet module to return null when supplied non-string values', function() {
      expect(greet()).toBe('');
    });

    it('expects the greet module to return hello world', function() {
      expect(greet()).toBe('hello world');
    });
  });
});