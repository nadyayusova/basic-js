const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) {
    return [];
  }

  const result = [names[0]];

  for (let i = 1; i < names.length; i++) {
    const target = names[i];
    let count = 0;
    
    // поиск в старых именах
    for (let j = 0; j < i; j++) {
      if (names[j] === target) {
        count++;
      }
    }

    let newName = '';
    if (count > 0) {
      newName = target + '(' + count + ')';
    } else {
      newName = target;
    }

    // поиск в новых именах
    count = 0;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === newName) {
        count++;
      }
    }

    if (count > 0) {
      result.push(newName + '(' + count + ')');
    } else {
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
