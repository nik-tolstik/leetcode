import { describe, expect, it } from "vitest";

import { isAnagram } from "./solution";

describe("isAnagram", () => {
  it("returns true for the first official example", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("returns false for the second official example", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("returns false when lengths differ", () => {
    expect(isAnagram("ab", "a")).toBe(false);
  });

  it("handles repeated characters", () => {
    expect(isAnagram("aabbcc", "baccab")).toBe(true);
  });

  it("returns false when character counts differ", () => {
    expect(isAnagram("aacc", "ccac")).toBe(false);
  });
});
