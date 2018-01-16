'use strict';

exports.add = function(a, b) {
  if(typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return null;
  }
};

exports.sub = function(a, b) {
  if(typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    return null;
  }
};
