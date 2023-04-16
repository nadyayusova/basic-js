const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const currentLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const matrix = [];
    
    for (let i = 0; i < 26; i++) {
      matrix[i] = currentLetters.slice();
      const l0 = currentLetters.shift();
      currentLetters.push(l0);
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let currKeyPosition = 0;

    let targetArr = [];
    for (let i = 0; i < message.length; i++) {
      const mesIdx = letters.findIndex((item) => item === message[i]);

      if (mesIdx >= 0) {
        // шифруем
        const keyIdx = letters.findIndex((item) => item === key[currKeyPosition]);
        targetArr.push(matrix[mesIdx][keyIdx]);
        currKeyPosition++;
        if (currKeyPosition === key.length) {
          currKeyPosition = 0;
        }
      } else {
        // пробелы и знаки
        targetArr.push(message[i]);
      }
    }

    if (this.type) {
      return targetArr.join('');
    } else {
      return targetArr.reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const currentLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const matrix = [];

    for (let i = 0; i < 26; i++) {
      matrix[i] = currentLetters.slice();
      const l0 = currentLetters.shift();
      currentLetters.push(l0);
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let currKeyPosition = 0;

    let targetArr = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
      const keyIdx = letters.findIndex((item) => item === key[currKeyPosition]);
      const charIdx = matrix[keyIdx].findIndex((item) => item === encryptedMessage[i]);

      if (charIdx >= 0) {
        // расшифровываем
        const mesLetter = letters[charIdx];
        targetArr.push(mesLetter);
        currKeyPosition++;
        if (currKeyPosition === key.length) {
          currKeyPosition = 0;
        }
      } else {
        // пробелы и знаки
        targetArr.push(encryptedMessage[i]);
      }
    }

    if (this.type) {
      return targetArr.join('');
    } else {
      return targetArr.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
