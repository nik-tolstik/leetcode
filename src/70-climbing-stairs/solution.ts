// https://leetcode.com/problems/climbing-stairs/

export function climbStairs(n: number): number {
  if (n < 1) return 0;
  if (n === 1) return 1;

  let prev2 = 1;
  let prev1 = 1;
  let current = prev1 + prev2;

  for (let i = 0; i < n - 2; i++) {
    prev2 = prev1;
    prev1 = current;
    current = prev1 + prev2;
  }

  return current;
}
