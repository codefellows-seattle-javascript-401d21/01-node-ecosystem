'use strict';

const greet = require('../lib/greet.js');

describe('Greet module', function(){
  describe('#NotString', function(){
    it('should return null for non-strings', function(){
      expect(greet(NaN)).toBeNull();
      expect(greet(1)).toBeNull();
      expect(greet([])).toBeNull();
    });
  });
  describe('#Greeting', function(){
    it('should return "Hello world" when param "world" used', function(){
      expect(greet('world')).toBe('Hello world');
    });
  });
});
