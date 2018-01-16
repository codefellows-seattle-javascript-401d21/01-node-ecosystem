'use strict';

const greet = require('../lib/greet');

describe('Greet Module', function () {
  it('should take in a string name and return hello "name".', function () {
    expect(greet('steve')).toEqual('hello steve');
    expect(greet('john')).toEqual('hello john');
  });

  it('should return null in the event of being provided a non string as an argument', function () {
    expect(greet(0)).toEqual(null);
    expect(greet(1234)).toEqual(null);
  });

  it('should return "hello nameless person" if an empty string is passed as the name argument', function () {
    expect(greet('')).toEqual('hello nameless person');
  });
});
