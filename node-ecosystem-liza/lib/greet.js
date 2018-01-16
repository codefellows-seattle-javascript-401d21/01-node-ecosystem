'use strict';

module.exports = function(input) {
  if (typeof input === 'string') {
    return 'hello ' + input;
  } else {
    return null;
  }
};