'use strict';

module.exports = function (input) {
  if (typeof input !== 'string') return null;
    
  return 'hello ' + input;
};