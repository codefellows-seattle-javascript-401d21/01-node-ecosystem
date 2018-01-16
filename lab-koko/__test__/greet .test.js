'use strict';

const greet = require ('../lib/greet.js');

describe ('Greet Module', function () {
  describe ('#Input', function() {
    it ('should take in a string', function(){
      expect(greet.input).toEqual('');
      expect(greet.input).not.toEqual();
    });
    it ('should take in the argument world', function(){
      expect (greet.input).toEqual('Hello World');
    });
  });
});