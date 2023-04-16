const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if ((typeof date !== 'object') || (Object.keys(date).length > 0) || Array.isArray(date)) {
    throw new Error('Invalid date!');
  }


  let month = date.getMonth();
  if (month >= 0) {
    switch (month) {
      case 2:
      case 3:
      case 4:
        return 'spring';
      case 5:
      case 6:
      case 7:
        return 'summer';
      case 8:
      case 9:
      case 10:
        return 'autumn';
      default:
        return 'winter';
      };

    return season;
  }
  
  throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
