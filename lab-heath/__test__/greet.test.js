'use strict';

const greet = require('../lib/greet.js');
require('jest');

describe('#greet module', function() {
  it('should take a object and return null when supplying non string values', function() {
    expect(greet.hello(123)).toBe(null);
  })
  it('should return "hello world" when supplying a string', function() {
    expect(greet.hello('world')).toBe('hello world');
  })
})
