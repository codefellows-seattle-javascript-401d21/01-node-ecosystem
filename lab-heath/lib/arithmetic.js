'use strict';

const arithmetic = module.exports = {};
require('jest');

arithmetic.add = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  } else {
    return num1 + num2;
  }
};

arithmetic.sub = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  } else {
    return num1 - num2;
  }
};
