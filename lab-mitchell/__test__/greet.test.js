'use strict';

const greet = require('../lib/greet');
describe('', function() {
  expect(greet.greet(123)).toEqual(null);
}

expect(greet.greet('world')).toEqual('hello world');
