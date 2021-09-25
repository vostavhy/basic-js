function deleteDigit(n) {
  let max = -Infinity;
  n = n.toString();
  for (let i = 0; i < n.length - 1; i++) {
    let temRes = n.slice(0, i) + n.slice(i + 1);
    const number = Number(temRes);
    if (number > max) max = number;
  }
  return max;
}

console.log(deleteDigit(10));