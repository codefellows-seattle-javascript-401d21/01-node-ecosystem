'use strict';

const arithmetic = module.exports = {};

const are_numbers = (...vals) => vals.every(val => typeof val === 'number');

arithmetic.add = (a, b) =>  are_numbers(a,b) ?  a + b : null;

arithmetic.sub = (a, b) => are_numbers(a,b) ? a - b : null;


