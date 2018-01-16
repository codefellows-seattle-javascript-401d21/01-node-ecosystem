'use strict';

const myMath = module.exports = {};

myMath.add = function(num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return null;
  } else {
    return num1 + num2;
  }
};
myMath.sub = function(num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  } else {
    return num1 - num2;
  }
};
