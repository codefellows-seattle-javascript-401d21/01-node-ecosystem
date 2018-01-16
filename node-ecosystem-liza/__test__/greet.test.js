'use strict';

const greet = require('../lib/greet');

describe('Greet Module', function() {
  describe('#Input', function() {
    it('expects the greet module to return null when supplied non-string values', function() {
      expect(greet(123)).toBe(null);
    });

    it('expects the greet module to return hello world', function() {
      expect(greet('world')).toBe('hello world');
    });
  });
});