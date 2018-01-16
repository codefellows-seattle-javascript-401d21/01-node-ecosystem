'use strict';

const arithmetic = require('../lib/arithmetic.js');
require('jest');

describe('#add module', function() {
  it('if either arguments is not a number, return null', function() {
    expect(arithmetic.add(1, 'a')).toBe(null);
  })
  it('added 2 arguments it should return the sum of them', function() {
    expect(arithmetic.add(1, 2)).toBe(3);
  })
})

describe('#sub module', function() {
  it('if either arguments is not a number, return null', function() {
    expect(arithmetic.sub(1, 'a')).toBe(null);
  })
  it('added 2 arguments it should return the sub of them', function() {
    expect(arithmetic.sub(2, 1)).toBe(1);
  })
})
