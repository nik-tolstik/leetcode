// https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/

export function maxSum(nums: number[]): number {
  const set = new Set(nums);
  let sum = 0;
  let max: number = -Infinity;

  set.forEach((num) => {
    max = Math.max(max, num);
    if (num > 0) sum += num;
  });

  if (max < 0) {
    return max;
  }

  return sum;
}
