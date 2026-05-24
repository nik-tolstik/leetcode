// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (true) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];

    if (left === numbers.length - 1) throw new Error("Left is out of range");

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    }
  }
}
