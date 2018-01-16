'use strict';
const greet = require('../lib/greet');

describe('Greet Module', function() {
  it('Should take a string as an argument and return hello + string', function() {
    expect(greet.wassup('Roger')).toEqual('Hello Roger');
  });
  it('Should validate that the input is a string', function() {
    expect(greet.wassup(25)).toEqual(null);
  });
});
