'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function (numOne, numTwo) {
  return (typeof numOne === 'number' && typeof numTwo === 'number') ? numOne + numTwo : null;
}

arithmetic.sub = function (numOne, numTwo) {
  return (typeof numOne === 'number' && typeof numTwo === 'number') ? numTwo - numOne : null;
}
