'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe ('arithmetic module', function() {
  describe ('#add', function () {
    it ('should return null if any input is not a number', function () {
      expect( arithmetic.add('a', 2) ).toEqual(null);
      expect( arithmetic.add(1, 'b') ).toEqual(null);
      expect( arithmetic.add('a', 'b') ).toEqual(null);
    })

    it ('should return the sum of two numbers', function () {
      expect( arithmetic.add(1, 2) ).toEqual(3);
      expect( arithmetic.add(2, 3) ).toEqual(5);
      expect( arithmetic.add(3, 4) ).toEqual(7);
    })
  })

  describe ('#sub', function () {
    it ('should return null if any input is not a number', function () {
      expect( arithmetic.sub('a', '2') ).toEqual(null);
      expect( arithmetic.sub('1', 'b') ).toEqual(null);
      expect( arithmetic.sub('a', 'b') ).toEqual(null);
    })

    it ('should return the second parameter subtracted from the first parameter', function () {
      expect( arithmetic.sub(1, 2) ).toEqual(1);
      expect( arithmetic.sub(2, 4) ).toEqual(2);
      expect( arithmetic.sub(3, 6) ).toEqual(3);
    })
  })
})
