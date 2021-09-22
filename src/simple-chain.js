import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (position === this.chain.length) {
      this.chain.pop()
      return this;
    }
    this.chain = this.chain.slice(0, position - 1).concat(this.chain.slice(position));
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};
