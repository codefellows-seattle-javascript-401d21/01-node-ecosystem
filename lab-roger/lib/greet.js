'use strict';

exports.wassup = function(text) {
  if(typeof text === 'string') {
    return `Hello ${text}`;
  } else {
    return null;
  }
};
