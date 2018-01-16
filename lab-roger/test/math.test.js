'use strict';

const math = require('../lib/math');

describe('Math Module', function() {
  describe('#Add', function() {
    it('it should take 2 numeric arguments and add them together', function() {
      expect(math.add(3, 5)).toEqual(8);
    });
    it('if either of the parameters are non numerical it should return null', function() {
      expect(math.add('', 3)).toEqual('null');
    });
  });

  describe('#Subtract', function() {
    it('it should take 2 numeric arguments and subtract one from the other', function() {
      expect(math.sub(10, 5)).toEqual(5);
    });
    it('if either of the parameters are non numerical it should return null', function() {
      expect(math.sub('', 6)).toEqual('null');
    });
  });
});
