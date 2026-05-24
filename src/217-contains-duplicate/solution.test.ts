import { describe, expect, it } from "vitest";

import { containsDuplicate } from "./solution";

describe("containsDuplicate", () => {
  it("returns true when duplicates exist in the official example", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("returns false when all elements are unique", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it("returns true when all values repeat", () => {
    expect(containsDuplicate([2, 2, 2, 2, 2])).toBe(true);
  });

  it("returns false for an empty array", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it("handles negative values", () => {
    expect(containsDuplicate([0, -1, 3, -1])).toBe(true);
  });
});
