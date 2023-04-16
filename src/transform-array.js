const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
  }

  if (arr.length === 0) {
    return [];
  }

  const result = [];
  let state = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev' && result.length > 0 && state === '') {
      result.pop();
      state = '';
    } else if (arr[i] === '--double-prev' && result.length > 0 && state === '') {
      result.push(result[result.length - 1]);
      state = '';
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1 &&
          arr[i + 1] !== '--discard-prev' && 
          arr[i + 1] !== '--double-prev' && 
          arr[i + 1] !== '--double-next' && 
          arr[i + 1] !== '--discard-next') {
        result.push(arr[i + 1]);
      state = '';
    }
    } else if (arr[i] === '--discard-next') {
      i++;
      state = 'deleted';
    } else if (
        arr[i] !== '--discard-prev' && 
        arr[i] !== '--double-prev' && 
        arr[i] !== '--double-next' && 
        arr[i] !== '--discard-next') {
      result.push(arr[i]);
      state = '';
    }
  } 

  return result;
}

module.exports = {
  transform
};
