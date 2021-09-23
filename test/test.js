class DepthCalculator {
  count = 1;
  calculateDepth(arr) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        this.count++;
        this.calculateDepth(arr.flat());
        break;
      }
    }
    return this.count;
  }
}


const depthCalculator = new DepthCalculator();
console.log(depthCalculator.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));
