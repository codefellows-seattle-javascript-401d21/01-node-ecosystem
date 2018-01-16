'use strict';

const greet = require('../lib/greet');

describe('greet', () =>{
  test('greet is a function', () => {
    expect(greet).toBeInstanceOf(Function);
  });
  test('greet arg is not a string', () => {
    expect(greet(expect.any(! String))).toBe(null);
  });
  test('greet returns hello "str" ', () => {
    const str = 'world';
    expect(greet(str)).toBe(`hello ${str}`);
  });
});