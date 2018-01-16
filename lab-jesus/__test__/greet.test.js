'use strict';

const greet = require('../lib/greet.js');
require('jest'); 

describe('Greet Module', function() {
  describe('#Greet', function() {
    it('should take in an arguement and return hello + the arguement provided as a string', function() {
      expect(greet('world')).toEqual('hello world');
    });

    it('should validate that the input for `greet` is a string value', function() {
      expect(greet(123)).toEqual(null);
    });
  });
});
