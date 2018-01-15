'use strict';

exports.add = (a,b) => {
  if(typeof a != 'number' || typeof b != 'number') return null;
  return a + b;
};

exports.sub = (a,b) => {
  if(typeof a != 'number' || typeof b != 'number') return null;
  return a - b;
};