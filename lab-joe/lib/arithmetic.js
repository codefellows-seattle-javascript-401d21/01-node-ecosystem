'use strict';

const arithmetic = module.exports = {};

arithmetic.sum = function(a, b) {
  if(typeof a != 'number' || typeof b != 'number') return null;
  return a + b;
};
