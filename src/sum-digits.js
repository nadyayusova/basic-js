const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let str = String(n);

  while (str.length > 1) {
    let arr = str.split('');
    arr = arr.map((item) => Number(item)).reduce((acc, item) => acc + item, 0);
    str = String(arr);
  }

  return Number(str);
}

module.exports = {
  getSumOfDigits
};
