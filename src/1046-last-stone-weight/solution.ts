// https://leetcode.com/problems/last-stone-weight/

class SortedList {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = [...nums].sort((a, b) => a - b);
  }

  pop() {
    return this.nums.pop();
  }

  push(value: number) {
    let pasted = false;

    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] >= value) {
        this.nums.splice(i, 0, value);
        pasted = true;
        break;
      }
    }

    if (!pasted) {
      this.nums.push(value);
    }
  }

  get value() {
    return this.nums;
  }

  get length() {
    return this.nums.length;
  }
}

export function lastStoneWeight(stones: number[]): number {
  const list = new SortedList(stones);

  while (list.length > 1) {
    const diff = list.pop() - list.pop();

    if (diff > 0) {
      list.push(diff);
    }
  }

  return list.pop() || 0;
}
