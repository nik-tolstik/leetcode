import { describe, expect, it } from "vitest";

import { climbStairs } from "./solution";

describe("climbStairs", () => {
  it("returns 2 for 2 stairs", () => {
    expect(climbStairs(2)).toBe(2);
  });

  it("returns 3 for 3 stairs", () => {
    expect(climbStairs(3)).toBe(3);
  });

  it("returns 1 for 1 stair", () => {
    expect(climbStairs(1)).toBe(1);
  });

  it("returns 5 for 4 stairs", () => {
    expect(climbStairs(4)).toBe(5);
  });

  it("returns the maximum-case Fibonacci value", () => {
    expect(climbStairs(45)).toBe(1836311903);
  });
});
