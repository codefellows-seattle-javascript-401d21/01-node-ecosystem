'use strict';

const greet = require ('../lib/greet.js');

describe ('greet module', function () {
  describe ('#greet', function () {
    it ('should return the input name, concatenated with "hello "', function () {
      expect ( greet ('jordan') ).toEqual('hello jordan');
      expect ( greet ('scott') ).toEqual('hello scott');
      expect ( greet ('world') ).toEqual('hello world');
    })

    it ('should expect a string as its input', function () {
      expect ( greet (123) ).toEqual(null);
      expect ( greet (false) ).toEqual(null);
      expect ( greet (undefined) ).toEqual(null);
    })
  })
})
