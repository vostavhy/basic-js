let chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push(`(${value})`);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      throw new Error("You can't remove incorrect link!");
      this.chain = [];
      return this;
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
    return this.chain.join('~~')
  }
};


console.log(chainMaker.addLink(1).addLink(2).finishChain());
