import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let obj1 = {};
  let obj2 = {};

  for (let char of s1) {
    if (s2.indexOf(char) === -1) continue;
    if (obj1[char] === undefined) {
      obj1[char] = 1;
      continue;
    }
    obj1[char] += 1;
  }

  for (let char of s2) {
    if (s1.indexOf(char) === -1) continue;
    if (obj2[char] === undefined) {
      obj2[char] = 1;
      continue;
    }
    obj2[char] += 1;
  }

  let result = 0;

  for (let key in obj1) {
    let tempResult = obj1[key] - obj2[key];
    if ((tempResult === 0) || (tempResult < 0)) tempResult = obj1[key];
    else tempResult = obj2[key];
    result += tempResult;
  }

  return result;
}