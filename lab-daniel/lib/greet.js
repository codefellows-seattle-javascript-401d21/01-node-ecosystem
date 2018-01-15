'use strict';

exports.hello = name => {
  if(typeof name != 'string') return null;
  return `hello ${name}`;
};