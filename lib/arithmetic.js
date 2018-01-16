'use strict'

const math = module.exports = {}

math.add = function(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    } else {
        return null;
    }
};

math.subtract = function(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return b - a;
    } else {
        return null;
    }
};