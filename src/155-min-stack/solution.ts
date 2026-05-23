// https://leetcode.com/problems/min-stack/

export class MinStack {
  stack: number[] = [];
  minHistory: number[] = [];

  constructor() {}

  push(val: number): void {
    const min = this.getMin();

    this.stack.push(val);

    if (min === undefined || min >= val) {
      this.minHistory.push(val);
    }
  }

  pop(): number {
    const val = this.stack.pop();
    const min = this.getMin();

    if (val === min) {
      this.minHistory.pop();
    }

    return val;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minHistory[this.minHistory.length - 1];
  }
}
