'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic', () => {
  describe('arithmetic.add', () => {
    test('arithmetic.add is a function', () => {
      expect(arithmetic.add).toBeInstanceOf(Function);
    });
    test('arithmetic.add returns null for NaN', () => {
      expect(arithmetic.add(expect.any(! Number), expect.any(! Number))).toEqual(null);
    });
    test('arithmetic.add returns null for NaN', () => {
      expect(arithmetic.add(1, expect.any(! Number))).toEqual(null);
    });

    test('arithmetic.add returns sum of two numbers', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });
  });

  describe('arithmetic.sub', () =>{
    test('arithmetic.sub is a function', () => {
      expect(arithmetic.sub).toBeInstanceOf(Function);
    });
    test('arithmetic.sub returns null for NaN', () => {
      expect(arithmetic.sub(expect.any(! Number), expect.any(! Number))).toEqual(null);
    });
    test('arithmetic.sub returns null for NaN', () => {
      expect(arithmetic.sub(1, expect.any(! Number))).toEqual(null);
    });
    test('arithmetic.sub returns difference of two numbers', () => {
      expect(arithmetic.sub(1, 2)).toEqual(1);
    });
  });
});