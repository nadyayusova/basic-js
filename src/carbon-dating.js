const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!sampleActivity || (typeof sampleActivity) !== 'string') {
    return false;
  }
  
  const ln2 = 0.693;
  const old = Number(sampleActivity);

  if (old && old > 0 && old < MODERN_ACTIVITY) {
    const k = ln2 / HALF_LIFE_PERIOD;
    const t = Math.log(MODERN_ACTIVITY / old) / k;
    return Math.ceil(t);
  }
  
  return false;
}

module.exports = {
  dateSample
};
