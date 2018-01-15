module.exports = function greeting(string) {
  if (typeOf(string) === 'string') {
    return 'Hello ' + string;
  }
  if (typeOf(string) !== 'string' ) {
    return null;
  }
};