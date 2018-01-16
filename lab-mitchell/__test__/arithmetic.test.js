'use strict';

const arithmetic = require('../lib/arithmetic')

test('to determine whether function properly adds two numbers', function () {
  expect(arithmetic.add(1, 2)).toEqual(3);
});

test('to determine whether function responds properly if both arguments are not numbers', function () {
  expect(arithmetic.add('a', 2)).toEqual(null);
});

test('to determine whether function properly subtracts two numbers', function () {
  expect(arithmetic.sub(1, 2)).toEqual(-1);
});

test('to determine whether function properly adds two numbers', function () {
  expect(arithmetic.sub(1, 'b')).toEqual(null);
});
