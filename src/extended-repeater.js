const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let addStr = '';
  let addition = options.addition;
  if (typeof addition === 'boolean' && addition) {
    addition = 'true';
  }
  if (typeof addition === 'boolean' && !addition) {
    addition = 'false';
  }
  if (addition === null) {
    addition = 'null';
  }
  if (addition) {
    const add = [];
    for (let i = 0; i < (options.additionRepeatTimes ? options.additionRepeatTimes : 1); i++) {
      add.push(addition);
    }
    if (add.length > 0) {
      const sep = options.additionSeparator ? options.additionSeparator : '|';
      addStr = add.join(sep);
    }
  }
    
  let target = str;
  if (typeof target === 'boolean' && target) {
    target = 'true';
  }
  if (typeof target === 'boolean' && !target) {
    target = 'false';
  }
  if (target === null) {
    target = 'null';
  }
  const repStr = target + addStr;
  const rep = [];
  for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i++) {
    rep.push(repStr);
  }
  let result = '';
  if (rep.length > 0) {
    const sep = options.separator ? options.separator : '+';
    result = rep.join(sep);
  }

  return result;
}

module.exports = {
  repeater
};
