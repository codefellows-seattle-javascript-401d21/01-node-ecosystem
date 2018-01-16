'use strict';

const greet = module.exports = function(string) {
  if (typeof string !== 'string') return null;

    return `hello ${string}`;
};
