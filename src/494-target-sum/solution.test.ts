import { describe, expect, it } from "vitest";

import { findTargetSumWays } from "./solution";

describe("findTargetSumWays", () => {
  it("returns the expected count for the first official example", () => {
    expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
  });

  it("returns the expected count for the second official example", () => {
    expect(findTargetSumWays([1], 1)).toBe(1);
  });

  it("returns 0 when the target cannot be reached", () => {
    expect(
      findTargetSumWays(
        [9, 12, 4, 1, 1, 4, 3, 7, 5, 4, 2, 1, 1, 1, 1, 1, 2],
        5,
      ),
    ).toBe(4942);
  });
});
