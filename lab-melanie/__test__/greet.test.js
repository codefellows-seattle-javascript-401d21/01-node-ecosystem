'use strict';

const greet = require('../lib/greet.js');

describe('Greet Module', function() {
  describe('#Greet', function() {
    it('should have a single parameter that should expect a string as it\'s input', function() {
      expect(greet.hello(typeof 1234)).not.toBe('string');
    });
    it('should return input name contatenated with "hello"', function() {
      expect(greet.hello('susan')).toBe('hello susan');
    });
    it('should return null if input is not a string', function() {
      expect(greet.hello(1234)).toBeNull();
    });
  });
});
