import { describe, expect, it } from "vitest";

import { findKthLargest } from "./solution";

describe("findKthLargest", () => {
  it("returns the expected value for the first official example", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  it("returns the expected value for the second official example", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  it("handles duplicates with k=1", () => {
    expect(findKthLargest([1, 1, 1], 1)).toBe(1);
  });

  it("handles negative numbers", () => {
    expect(findKthLargest([-1, -2, -3, -4], 2)).toBe(-2);
  });

  it("handles k at bounds", () => {
    expect(findKthLargest([9, 4, 1, 7], 1)).toBe(9);
    expect(findKthLargest([9, 4, 1, 7], 4)).toBe(1);
  });
});
