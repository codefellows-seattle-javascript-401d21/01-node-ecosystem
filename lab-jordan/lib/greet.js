'use strict';

const greet = module.exports = function (name) {
  return typeof name === 'string' ? `hello ${name}` : null;
}
