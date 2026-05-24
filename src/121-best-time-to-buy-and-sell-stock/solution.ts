// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

export function maxProfit(prices: number[]): number {
  let best = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const item = prices[i];
    const diff = item - min;

    if (best < diff) {
      best = item - min;
    }

    if (min > item) {
      min = item;
    }
  }

  return best;
}
