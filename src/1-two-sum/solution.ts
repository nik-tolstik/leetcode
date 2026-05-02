export function twoSum(nums: number[], target: number): number[] {
  // [value, index]
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]!;
    const x = target - n;

    if (seen.has(x)) {
      return [seen.get(x)!, i];
    }

    seen.set(n, i);
  }

  return [];
}
