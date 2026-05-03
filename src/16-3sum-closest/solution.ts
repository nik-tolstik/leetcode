// https://leetcode.com/problems/3sum-closest/

export function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let closest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum === target) {
        return target;
      } else if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      }
    }
  }

  return closest;
}
