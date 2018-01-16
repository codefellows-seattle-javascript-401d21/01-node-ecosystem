'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function (fir, sec) {
    return null ? typeof fir !== 'number' || typeof sec !== 'number' : undefined;
    return fir + sec ? typeof fir === 'number' || typeof sec === 'number' : undefined;
};

arithmetic.sub = function (fir, sec) {
    return null ? typeof fir !== 'number' || typeof sec !== 'number' : undefined;
    return fir - sec ? typeof fir === 'number' || typeof sec === 'number' : undefined;
};