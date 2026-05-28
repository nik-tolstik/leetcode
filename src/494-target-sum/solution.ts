// https://leetcode.com/problems/target-sum/

export function findTargetSumWays(nums: number[], target: number): number {
  let dp = new Map<number, number>();
  dp.set(0, 1);

  for (const num of nums) {
    const next = new Map<number, number>();

    for (const [sum, count] of dp) {
      next.set(sum + num, (next.get(sum + num) ?? 0) + count);
      next.set(sum - num, (next.get(sum - num) ?? 0) + count);
    }

    dp = next;
  }

  return dp.get(target) ?? 0;
}
