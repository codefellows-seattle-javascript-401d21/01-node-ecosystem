const arithmetic = module.exports = {};

arithmetic.add = function (x, y) {
  if (isNaN(x) || isNaN(y)) {
    return null;
  } else{
    return x + y;
  }
};

arithmetic.sub = function (x, y) {
  if (isNaN(x) || isNaN(y)) {
    return null;
  } else{
    return x - y;
  }
};