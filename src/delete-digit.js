const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const str = String(n);
  const arr = str.split('');
  const numbersArray = [];

  for (let i = 0; i < arr.length; i++) {
    const copy = arr.slice()
    copy.splice(i, 1);
    numbersArray.push(+copy.join(''));
  }

  return Math.max(...numbersArray);
}

module.exports = {
  deleteDigit
};
