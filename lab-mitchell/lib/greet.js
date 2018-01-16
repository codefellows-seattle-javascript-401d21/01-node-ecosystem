'use strict';

const greet = module.exports = {};

greet.greet= function(str) {
  if (typeof str !== 'string') {
    return null;    
  }
  return 'hello ' + str; 
};

