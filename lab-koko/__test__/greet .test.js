'use strict';

const greet = require ('../lib/greet.js');

describe ('Greet Module', function () {
  describe ('#Input', function() {
    it ('should take in a string', function(){
      expect(greet(123)).toEqual(null);
    });
    it ('should take in the argument world', function(){
      expect (greet('World')).toEqual('Hello World');
    });
  });
});