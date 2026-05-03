import { describe, expect, it } from "vitest";

import { buddyStrings } from "./solution";

describe("buddyStrings", () => {
  it("returns true for the first official example", () => {
    expect(buddyStrings("ab", "ba")).toBe(true);
  });

  it("returns true for the third official example", () => {
    expect(buddyStrings("aa", "aa")).toBe(true);
  });

  it("allows one swap near the end of a string", () => {
    expect(buddyStrings("aaaaaaabc", "aaaaaaacb")).toBe(true);
  });

  it("returns false when the strings have different lengths", () => {
    expect(buddyStrings("abc", "ab")).toBe(false);
  });

  it("returns false when more than two positions differ", () => {
    expect(buddyStrings("abcd", "badc")).toBe(false);
  });

  it("returns true for equal strings with a duplicate character", () => {
    expect(buddyStrings("abca", "abca")).toBe(true);
  });

  it("returns false when the two differing characters do not cross-match", () => {
    expect(buddyStrings("ab", "ca")).toBe(false);
  });
});
