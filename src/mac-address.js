const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof n !== 'string') {
    return false;
  }

  const numbers = n.split('-');
  // чисел 6
  if (numbers.length !== 6) {
    return false;
  }
  // все должны быть двузначными, длина строки 2
  numbers.forEach((item) => {
    if (item.length !== 2) {
      return false;
    }
  });
  // все символы валидные шестнадцатеричные
  return /^[0-9a-fA-F-]+$/.test(n)
}
module.exports = {
  isMAC48Address
};
