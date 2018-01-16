'use strict';

// greet
module.exports = function (name) {
  if (typeof name !== 'string') return null;
  if (name === '') return 'hello nameless person';
  return 'hello ' + name;
};
