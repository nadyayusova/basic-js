const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if (!Array.isArray(members)) {
    return false;
  }

  const words = members.filter((item) => (typeof item === 'string') && /[a-zA-Z]*/.test(item));
  const res = words.map((item) => item.trim()[0].toUpperCase()).sort((a, b) => a.localeCompare(b)).join('');
  return res;
}

module.exports = {
  createDreamTeam
};
