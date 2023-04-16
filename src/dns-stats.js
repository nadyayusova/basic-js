const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const domainsCopy = domains.slice();
  for (let i = 0; i < domainsCopy.length; i++) {
    domainsCopy[i] = domainsCopy[i].split('.').reverse();
  }
  domainsCopy.sort((a, b) => b.length - a.length);

  const domainStrings = [];
  for (let i = 0; i < domainsCopy.length; i++) {
    for (let j = 0; j < domainsCopy[i].length; j++) {
      let str = '';
      for (let k = 0; k <= j; k++) {
        str = str + '.' + domainsCopy[i][k];
      }
      domainStrings.push(str);
    }
  }

  const res = {};
  for (let i = 0; i < domainStrings.length; i++) {
    const keys = Object.keys(res);
    
    if (keys.length > 0 && keys.find((item) => item === domainStrings[i])) {
      res[domainStrings[i]]++;
    } else {
      res[domainStrings[i]] = 1;
    }
  }

  return res;
}

module.exports = {
  getDNSStats
};
