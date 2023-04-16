const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!str || !str.length) {
    return '';
  }

  let encoded = [];
  let letter = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    } else {
      encoded.push([count, letter]);
      count = 1;
      letter = str[i];
    }
  }
  encoded.push([count, letter]);

  encoded.forEach((item) => {
    if (item[0] === 1) {
      item[0] = '';
    }
  });
  const res = encoded.map((item) => item.join('')).join('');

  return res;
}

module.exports = {
  encodeLine
};
