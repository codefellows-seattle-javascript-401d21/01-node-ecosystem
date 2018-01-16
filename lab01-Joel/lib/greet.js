'use strict';

const greet = module.exports = {};

greet.hello = function(name) {
  if (name === '' || typeof name !== 'string') {
    return null;
  } else {
    return ('hello ' + name);
  }
};
