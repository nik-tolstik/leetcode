import { describe, expect, it } from "vitest";

import { numSquares } from "./solution";

describe("numSquares", () => {
  it("returns the expected count for the first official example", () => {
    expect(numSquares(12)).toBe(3);
  });

  it("returns the expected count for the second official example", () => {
    expect(numSquares(13)).toBe(2);
  });

  it("returns 1 when n is already a perfect square", () => {
    expect(numSquares(16)).toBe(1);
  });

  it("returns 1 for the smallest input", () => {
    expect(numSquares(1)).toBe(1);
  });

  it("handles a value that needs four squares", () => {
    expect(numSquares(7)).toBe(4);
  });
});
