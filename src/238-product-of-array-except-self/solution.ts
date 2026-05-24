// https://leetcode.com/problems/product-of-array-except-self/

export function productExceptSelf(nums: number[]): number[] {
  const result = Array.from({ length: nums.length }, () => 1);

  let leftProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}
