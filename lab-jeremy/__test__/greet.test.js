'use strict';

const greet = require('../lib/greet.js');

describe('Write a test that expects the greet module to return `null` when you supply non string values', () => {
  it('should return null', () => {
    expect(greet(123)).toBe(null);
  })
});

describe('Write a test the expects the greet module to return `hello world`', () => {
  it('should return hello name', () => {
    expect(greet('world')).toBe('hello world');
  })
});
