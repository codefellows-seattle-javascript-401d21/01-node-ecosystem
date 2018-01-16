`use strict`;

const arithmetic = {
  add: (num1, num2) => {
    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
      return num1 + num2;
    } else {
      return null;
    };
  },
  sub: (num1, num2) => {
    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
      return num1 - num2;
    } else {
      return null;
    };
  }
};

module.exports = arithmetic;