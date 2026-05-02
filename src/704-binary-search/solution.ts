// https://leetcode.com/problems/binary-search/description/
export function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    // значение >> 1 — это побитовый сдвиг вправо на 1 бит.
    // сдвиг вправо на 1 бит = деление на 2
    const mid = left + ((right - left) >> 1);

    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
