const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let copy = arr.slice();
  let copy2 = copy.filter((item) => item !== -1).sort((a, b) => a - b);
  const res = [];
  let index = 0;
  arr.forEach((item) => {
    if (item === -1) {
      res.push(-1);
    } else {
      res.push(copy2[index]);
      index++;
    }
  });

  return res;
}

module.exports = {
  sortByHeight
};
