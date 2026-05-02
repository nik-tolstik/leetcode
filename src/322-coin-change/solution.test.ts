import { describe, expect, it } from "vitest";

import { coinChange } from "./solution";

describe("coinChange", () => {
  it("returns the minimum number of coins for the basic example", () => {
    expect(coinChange([1, 2, 5], 11)).toEqual(3);
  });

  it("returns -1 when the amount cannot be made", () => {
    expect(coinChange([2], 3)).toEqual(-1);
  });

  it("works with duplicate numbers", () => {
    expect(coinChange([1], 0)).toEqual(0);
  });

  it("", () => {
    expect(coinChange([1, 4, 9], 17)).toEqual(3);
  });

  it("", () => {
    expect(coinChange([2, 5, 10, 1], 27)).toEqual(4);
  });
});
