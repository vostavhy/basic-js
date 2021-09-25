import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '';
  let tempRes = ''
  let number = 1;
  let char = str[0];
  for (let i = 0; i < str.length-1; i++) {
    if (char === str[i + 1]) {
      number++;
      if (i === str.length-2) {
        if (number > 1) tempRes = `${number}${char}`;
        else tempRes = char;
        result += tempRes;
        char = str[i + 1]
        number = 1;
      }
      continue;
    }
    if ((char != str[i + 1])) {
      if (number > 1) tempRes = `${number}${char}`;
      else tempRes = char;
      result += tempRes;
      char = str[i + 1]
      number = 1;
    }
  }
  if (str[str.length-2] != str[str.length-1]) result += str[str.length-1];
  return result;
}
