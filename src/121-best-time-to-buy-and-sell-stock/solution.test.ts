import { describe, expect, it } from "vitest";

import { maxProfit } from "./solution";

describe("maxProfit", () => {
  it("returns the expected profit for the first official example", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("returns 0 when prices only decrease", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("returns the profit from a simple rising sequence", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it("returns 0 for one-day input", () => {
    expect(maxProfit([5])).toBe(0);
  });

  it("uses the lowest buy before highest sell in the suffix", () => {
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(4);
  });
});
