// https://leetcode.com/problems/container-with-most-water/

export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const lh = height[left];
    const rh = height[right];

    const area = Math.min(lh, rh) * (right - left);
    max = Math.max(area, max);

    if (lh > rh) {
      right--;
    } else {
      left++;
    }
  }

  return max;
}
