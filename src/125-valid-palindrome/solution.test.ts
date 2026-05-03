import { describe, expect, it } from "vitest";

import { isPalindrome } from "./solution";

describe("isPalindrome", () => {
  it("returns true for a phrase that is a palindrome after normalization", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("returns false for a phrase that is not a palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  it("returns true for a string with no alphanumeric characters", () => {
    expect(isPalindrome(" ")).toBe(true);
  });

  it("ignores punctuation and character case", () => {
    expect(isPalindrome(".,Aa")).toBe(true);
  });

  it("handles numeric characters as part of the palindrome check", () => {
    expect(isPalindrome("0P")).toBe(false);
  });

  it("returns true for a single alphanumeric character", () => {
    expect(isPalindrome("7")).toBe(true);
  });
});
