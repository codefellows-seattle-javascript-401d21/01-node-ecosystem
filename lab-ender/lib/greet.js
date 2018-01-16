`use strict`;

const greet = (inputString) => {
  if (typeof(inputString) === `string`) {
    return `hello ${inputString}`;
  } else {
    return null;
  };
};
module.exports = greet;
