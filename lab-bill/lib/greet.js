module.exports = function greet(string) {
  if (typeof string  === 'string') {
    return 'Hello ' + string;
  }
  if (typeof string  !== 'string' ) {
    return null;
  }
};