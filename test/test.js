function repeater(str, options = {}) {
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

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));