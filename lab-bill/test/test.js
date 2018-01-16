const greet = require('../lib/greet.js');
const arithmetic = require('../lib/arithmetic.js');
require('jest');

describe('#Greet', function() {

  test('should return null if the input is not a string',()=> {
    expect(greet(1)).toEqual(null);
    expect(greet('World')).toEqual('Hello World');
  });
  test('should return hello world if the first word of the input is world', ()=>{
    expect(greet('World')).toEqual('Hello World');
  });
});

describe('#Arithmetic', function() {
  describe('#Sum', function () {
    it('should return the sum', function() {
      expect(arithmetic.add(1,2)).toEqual(3);
    });
    it('should null if one input is not a number', function(){
      expect(arithmetic.add(1, 'string')).toEqual(null);
    });
  });
  describe('#Difference', function () {
    it('should return the difference', function() {
      expect(arithmetic.sub(4,3)).toEqual(1);
    });
    it('should null if one input is not a number', function(){
      expect(arithmetic.sub(4, 'string')).toEqual(null);
    });
  });
});