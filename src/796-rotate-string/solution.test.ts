import { describe, expect, it } from "vitest";

import { rotateString } from "./solution";

describe("rotateString", () => {
  it("returns true for the first official example", () => {
    expect(rotateString("abcde", "cdeab")).toBe(true);
  });

  it("returns false for the second official example", () => {
    expect(rotateString("abcde", "abced")).toBe(false);
  });

  it("allows zero shifts when the strings are already equal", () => {
    expect(rotateString("abcde", "abcde")).toBe(true);
  });

  it("returns false when the strings have different lengths", () => {
    expect(rotateString("abc", "ab")).toBe(false);
  });

  it("handles the minimum string length", () => {
    expect(rotateString("a", "a")).toBe(true);
  });

  it("handles repeated characters that still form a rotation", () => {
    expect(rotateString("aaab", "abaa")).toBe(true);
  });
});
