import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if ((message === undefined) || key === undefined) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = this.getLongKey(message, key);
    let result = '';
    for (let i = 0; i < message.length; i++) {
      // если не буква латинского алфавита - просто добавляем символ к строке
      if (this.alphabet.indexOf(message[i]) === -1) {
        result += message[i];
        continue;
      }
      result += this.getEncryptedChar(message, key, i)
    }
    if (this.isDirect === false) result = result.split('').reverse().join('');
    return result;
  }

  decrypt(encryptedMessage, key) {
    if ((encryptedMessage === undefined) || key === undefined) throw new Error('Incorrect arguments!');
    key = key.toUpperCase();
    key = this.getLongKey(encryptedMessage, key);
    let result = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      // если не буква латинского алфавита - просто добавляем символ к строке
      if (this.alphabet.indexOf(encryptedMessage[i]) === -1) {
        result += encryptedMessage[i];
        continue;
      }
      result += this.getDecryptedChar(encryptedMessage, key, i)
    }

    if (this.isDirect === false) result = result.split('').reverse().join('');
    return result;
  }

  getLongKey(message, key) {
    let keyIndex = 0;
    let result = '';
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        result += message[i];
        continue;
      }
      if (keyIndex === key.length) keyIndex = 0;
      result += key[keyIndex];
      keyIndex++;
    }
    return result;
  }

  getEncryptedChar(message, key, index) {
    let encryptedIndex = this.alphabet.indexOf(message[index]) + this.alphabet.indexOf(key[index]);
    const encryptedChar = (encryptedIndex <= 25) ? this.alphabet[encryptedIndex] : this.alphabet[encryptedIndex - 26]; 
    return encryptedChar;
  }

  getDecryptedChar(encryptedMessage, key, index) {
    let decryptedIndex = this.alphabet.indexOf(encryptedMessage[index]) - this.alphabet.indexOf(key[index]);
    const decryptedChar = (decryptedIndex < 0) ? this.alphabet[26 + decryptedIndex] : this.alphabet[decryptedIndex]; 
    return decryptedChar;
  }
}
