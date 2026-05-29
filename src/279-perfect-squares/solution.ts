// https://leetcode.com/problems/perfect-squares/

export function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(Infinity);

  dp[0] = 0;

  for (let square = 1; square ** 2 <= n; square++) {
    const value = square ** 2;

    for (let sum = value; sum <= n; sum++) {
      dp[sum] = Math.min(dp[sum], dp[sum - value] + 1);
    }
  }

  return dp[n];
}
