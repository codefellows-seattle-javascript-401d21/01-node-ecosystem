'use strict';

const greet = require('../lib/greet.js');

describe('Greet Module', function() {
  describe('#Greet', function() {
    //this first test is not required, but decided to keep in code
    it('should have a single parameter that should expect a string as it\'s input', function() {
      expect(greet.hello(typeof 1234)).not.toBe('string');
    });
    //required test
    it('should return input name contatenated with "hello"', function() {
      expect(greet.hello('world')).toBe('hello world');
    });
    //required test
    it('should return null if input is not a string', function() {
      expect(greet.hello(1234)).toBeNull();
    });
  });
});
