'use strict';

module.exports = function greet(name){
  let input = name;
  if(typeof(name) !== 'string'){
    return null;
  } else {
    return `Hello ${input}`;
  }
};
