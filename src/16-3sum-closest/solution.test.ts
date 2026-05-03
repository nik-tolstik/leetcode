import { describe, expect, it } from "vitest";

import { threeSumClosest } from "./solution";

describe("threeSumClosest", () => {
  it("returns the closest sum for the first official example", () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
  });

  it("returns zero for the all-zero official example", () => {
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
  });

  it("handles the minimum input length", () => {
    expect(threeSumClosest([1, 1, 1], 0)).toBe(3);
  });

  it("returns an exact target match when one exists", () => {
    expect(threeSumClosest([1, 2, 4, 8, 16], 14)).toBe(14);
  });

  it("handles negative values and a negative target", () => {
    expect(threeSumClosest([-100, -98, -2, -1], -101)).toBe(-101);
  });

  it("handles duplicate values", () => {
    expect(threeSumClosest([1, 1, 1, 0], -100)).toBe(2);
  });
});
