'use strict';

const greet = module.exports = {};

greet.greeting = function(name){
  if(typeof(name) != 'string'){
    return null;
  }else{
    return `hello ${name}`;
  }
};
