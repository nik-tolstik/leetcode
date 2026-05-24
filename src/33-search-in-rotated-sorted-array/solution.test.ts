import { describe, expect, it } from "vitest";

import { search } from "./solution";

describe("search", () => {
  it("returns the index for a target in a rotated array", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it("returns -1 when the target is not present", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it("works when the array is not rotated", () => {
    expect(search([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  });

  it("works with a single element found", () => {
    expect(search([10], 10)).toBe(0);
  });

  it("works with a single element not found", () => {
    expect(search([10], 3)).toBe(-1);
  });
});
