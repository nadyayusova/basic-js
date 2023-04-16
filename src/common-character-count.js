const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.length === 0) {
      break;
    }
    const char = arr1[i];
    const index = arr2.indexOf(char);
    if (index >= 0) {
      arr2.splice(index, 1);
      sum++;
    }
  }

  return sum;
}

module.exports = {
  getCommonCharacterCount
};
