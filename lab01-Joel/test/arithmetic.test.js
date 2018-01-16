const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.js', function() {
  describe('testing arithmetic for NaN', function() {

    test('booleans should return null', function(){
      expect(arithmetic.add(true, false)).toBeNull();
    });

    test('Strings should return null', function(){
      expect(arithmetic.sub('a','b')).toBeNull();
    });
  });

  describe('testing arithmetic for numbers', function(){

    test('sum should pass', function() {
      expect(arithmetic.add(1,2)).toBe(3);
    });

    test('sum should pass', function() {
      expect(arithmetic.sub(1,2)).toBe(-1);
    });
  });

});
