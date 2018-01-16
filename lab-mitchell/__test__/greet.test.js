'use strict';

const greet = require('../lib/greet');

test('to determine whether function returns null for non string arguments', function() {
  expect(greet.greet(123)).toEqual(null);
});

test('to determine whether function greets with hello then the given string argument', function() {
  expect(greet.greet('world')).toEqual('hello world');
});
