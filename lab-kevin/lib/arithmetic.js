'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) =>  isNaN(a + b) ? null : a + b;

arithmetic.sub = (a, b) => isNaN(b - a) ? null : b - a;
