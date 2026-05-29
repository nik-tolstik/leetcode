// https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/

export function numberOfWays(n: number, x: number): number {
  const dp = new Map<number, number>();
  const MOD = 1_000_000_007;
  dp.set(0, 1);

  for (let i = 1; i ** x <= n; i++) {
    Array.from(dp.entries()).forEach(([k, count]) => {
      const next = k + i ** x;

      if (next <= n) {
        dp.set(next, ((dp.get(next) ?? 0) + count) % MOD);
      }
    });
  }

  return dp.get(n) ?? 0;
}
