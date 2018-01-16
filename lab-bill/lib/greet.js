module.exports = function greeting(string) {
  if (typeof(string) === 'string') {
    return 'Hello ' + string;
  }
  if (typeof(string) !== 'string' ) {
    return null;
  }
};