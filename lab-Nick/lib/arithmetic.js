'use strict';

const arithmetic = module.exports = {};

arithmetic.sub = function(a, b){
  if ((isNaN(a)) || (isNaN(b))) {
    return null;
  }
  if(typeof(a) !== 'number' || typeof(b) !== 'number'){
    return null;
  } else {
    return (a - b);
  }
};

arithmetic.add = function(a, b){
  if ((isNaN(a)) || (isNaN(b))) {
    return null;
  }
  if(typeof(a) !== 'number' || typeof(b) !== 'number'){
    return null;
  } else {
    return (a + b);
  }
};
