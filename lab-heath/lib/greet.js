'use strict';

const greet = module.exports = {};

greet.hello = function(string) {
  if (typeof string !== 'string') {
    return null;
  } else {
    return `hello ${string}`;
  }
};
