import { NotImplementedError } from '../extensions/index.js';

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

export default function repeater(str, options = {}) {
  let repeatTimes = (options['repeatTimes'] === undefined) ? 1 : options['repeatTimes'];
  let separator = (options['separator'] === undefined) ? '+' : options['separator'];
  let addition = (options['addition'] === undefined) ? '' : options['addition'];
  let additionRepeatTimes = (options['additionRepeatTimes'] === undefined) ? 1 : options['additionRepeatTimes'];
  let additionSeparator = (options['additionSeparator'] === undefined) ? '|' : options['additionSeparator'];

  let resultArr = [];
  let additionArr = [];

  if (additionRepeatTimes) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(`${addition}`);
    }
  }

  let additionStr = additionArr.join(`${additionSeparator}`);
  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      resultArr.push(`${str}${additionStr}`);
    }
  }
  let resultStr = resultArr.join(`${separator}`);

  return resultStr;
}
