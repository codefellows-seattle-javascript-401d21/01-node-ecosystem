const greet = require('../lib/greet.js');

let cheese = true;
describe('greet.js', function() {
  describe('test greet.hello for non-string input', function() {

    test('boolean should return null', function() {
      expect(greet.hello(cheese)).toBeNull();
    });

    test('Numbers should be null', function() {
      expect(greet.hello(1234)).toBeNull();
    });

  });

  describe('testing for hello "name" ', function() {

    test('name input is a string', function() {
      expect(greet.hello('joel')).toBe('hello joel');
    });
  });
});
