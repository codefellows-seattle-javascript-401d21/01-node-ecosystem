'use strict';

module.exports = function greet(input) {
  if (typeof input === 'string') {
    return ('Hello '+input);
  } else {
    return ('null');
  }
};