'use strict';

const greet = require('../lib/greet');
require('jest'); // This is not required

describe('Math Module', function() {
  describe('#Greeting', function() {
    it('take an input then greet!', function() {
      expect(greet.greeting('world')).toBe('hello world');
    });

    it('do not validate non string inputs', function() {
      expect(greet.greeting(5)).toBe(null);
    });


  });
});
