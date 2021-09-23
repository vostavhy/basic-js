class DepthCalculator {
  calculateDepth(arr) {
    return 1 + (Array.isArray(arr) ? arr.reduce((max, el) => {
      return Math.max(max, this.calculateDepth(el));
    }, 0) : -1);
  }
}

const depthCalculator = new DepthCalculator();
console.log(depthCalculator.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));
