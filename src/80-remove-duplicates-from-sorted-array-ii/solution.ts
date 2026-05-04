// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

export function removeDuplicates(nums: number[]): number {
  let k = 0;

  for (const num of nums) {
    if (k < 2 || num !== nums[k - 2]) {
      nums[k] = num;
      k++;
    }
  }

  return k;
}
