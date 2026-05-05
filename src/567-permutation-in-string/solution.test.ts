import { describe, expect, it } from "vitest";

import { checkInclusion } from "./solution";

describe("checkInclusion", () => {
  it("requires repeated characters to have exact counts", () => {
    expect(checkInclusion("aabc", "abccba")).toBe(false);
  });

  it("finds a permutation at the end of s2", () => {
    expect(checkInclusion("adc", "dcda")).toBe(true);
  });

  it("returns true for the first official example", () => {
    expect(checkInclusion("ab", "eidbaooo")).toBe(true);
  });

  it("returns false for the second official example", () => {
    expect(checkInclusion("ab", "eidboaoo")).toBe(false);
  });

  it("returns false when s1 is longer than s2", () => {
    expect(checkInclusion("abcd", "abc")).toBe(false);
  });

  it("returns true when s2 is exactly a permutation of s1", () => {
    expect(checkInclusion("adc", "cda")).toBe(true);
  });

  it("handles a matching single-character string", () => {
    expect(checkInclusion("a", "a")).toBe(true);
  });

  it("handles a non-matching single-character string", () => {
    expect(checkInclusion("a", "b")).toBe(false);
  });

  it("handles repeated characters in s1", () => {
    expect(checkInclusion("aabc", "caabebab")).toBe(true);
  });

  it("does not match characters spread across separate windows", () => {
    expect(checkInclusion("abc", "axbxc")).toBe(false);
  });

  it("finds a permutation at the beginning of s2", () => {
    expect(checkInclusion("abc", "baced")).toBe(true);
  });

  it("finds a permutation at the end of s2", () => {
    expect(checkInclusion("abc", "zzzcba")).toBe(true);
  });
});
