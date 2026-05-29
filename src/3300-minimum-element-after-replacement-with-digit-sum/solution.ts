// https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/

export function minElement(nums: number[]): number {
  let min = Infinity;

  for (const num of nums) {
    let sum = 0;

    for (const digit of String(num)) {
      sum += Number(digit);
      if (sum >= min) break;
    }

    min = Math.min(min, sum);
  }

  return min;
}
