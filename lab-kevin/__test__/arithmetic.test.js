'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic', () => {
  describe('arithmetic.add', () => {
    test('arithmetic.add is a function', () => {
      expect(arithmetic.add).toBeInstanceOf(Function);
    });
    test('arithmetic.add returns null for two non numbers', () => {
      expect(arithmetic.add('hungry', 'hippo')).toEqual(null);
    });
    test('arithmetic.add returns null for one non-number', () => {
      expect(arithmetic.add(7, 'hippo')).toEqual(null);
    });

    test('arithmetic.add returns not null for two numbers', () => {
      expect(arithmetic.add(7, 4)).toEqual(expect.anything());
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
      expect(arithmetic.sub('hungry', 'hippo')).toEqual(null);
    });
    test('arithmetic.sub returns null for NaN', () => {
      expect(arithmetic.sub(7, 'hippo')).toEqual(null);
    });
    test('arithmetic.sub returns not null for two numbers', () => {
      expect(arithmetic.sub(7, 4)).toEqual(expect.anything());
    });
    test('arithmetic.sub returns difference of two numbers', () => {
      expect(arithmetic.sub(1, 2)).toEqual(1);
    });
  });
});