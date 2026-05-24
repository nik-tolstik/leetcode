import { describe, expect, it } from "vitest";

import { twoSum } from "./solution";

describe("twoSum", () => {
  it("returns 1-indexed indices for the first official example", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it("returns 1-indexed indices for the second official example", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  it("returns 1-indexed indices for duplicate values", () => {
    expect(twoSum([0, 0, 3, 4], 0)).toEqual([1, 2]);
  });

  it("handles smallest possible input length", () => {
    expect(twoSum([1, 2], 3)).toEqual([1, 2]);
  });

  it("handles smallest possible input length", () => {
    expect(twoSum([5, 25, 75], 100)).toEqual([2, 3]);
  });
});
