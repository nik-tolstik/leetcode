export function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let sum = 1; sum <= amount; sum++) {
    for (const coin of coins) {
      if (sum - coin >= 0) {
        dp[sum] = Math.min(dp[sum], dp[sum - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
