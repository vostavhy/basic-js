import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = n.toString();
  let max = Number(n[0]);
  for (let i = 0; i < n.length - 1; i++) {
    let temRes = n.slice(0, i) + n.slice(i + 1);
    const number = Number(temRes);
    if (number > max) max = number;
  }
  return max;
}