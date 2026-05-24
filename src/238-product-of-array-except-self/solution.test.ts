import { describe, expect, it } from "vitest";

import { productExceptSelf } from "./solution";

describe("productExceptSelf", () => {
  it("returns the expected output for the first official example", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("returns the expected output for the second official example", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  it("handles all zeros", () => {
    expect(productExceptSelf([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it("handles a single zero", () => {
    expect(productExceptSelf([4, 0, 3])).toEqual([0, 12, 0]);
  });

  it("handles no zeros with negatives", () => {
    expect(productExceptSelf([-1, -2, -3])).toEqual([6, 3, 2]);
  });
});
