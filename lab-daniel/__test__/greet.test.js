'use strict';

const greet = require('../lib/greet');
require('jest');

describe('Greet Module', function () {
  describe('#Hello', function () {
    it('If passed a value that isn\'t a string the method should return null, if passed a string it should return \'hello\' followed by the string', function (){
      expect(greet.hello(1)).toBe(null);
      expect(greet.hello('world')).toBe('hello world');
    });
  });
});