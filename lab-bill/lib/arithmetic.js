module.exports = function add(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return null;
  } else{
    return x + y;
  }
};

module.exports = function sub(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return null;
  } else{
    return x - y;
  }
};