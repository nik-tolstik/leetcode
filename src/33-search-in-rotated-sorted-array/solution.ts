// https://leetcode.com/problems/search-in-rotated-sorted-array/

export function search(nums: number[], target: number): number {
  let k = 0;

  while (k <= Math.round(nums.length / 2)) {
    if (target === nums[k]) return k;
    if (target === nums[nums.length - 1 - k]) return nums.length - 1 - k;

    k++;
  }

  return -1;
}
