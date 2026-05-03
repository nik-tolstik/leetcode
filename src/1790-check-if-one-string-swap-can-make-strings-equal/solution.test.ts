import { describe, expect, it } from "vitest";

import { areAlmostEqual } from "./solution";

describe("areAlmostEqual", () => {
  it("returns true for the first official example", () => {
    expect(areAlmostEqual("bank", "kanb")).toBe(true);
  });

  it("returns false for the second official example", () => {
    expect(areAlmostEqual("attack", "defend")).toBe(false);
  });

  it("returns true for the third official example", () => {
    expect(areAlmostEqual("kelb", "kelb")).toBe(true);
  });

  it("returns false when more than two positions differ", () => {
    expect(areAlmostEqual("abcd", "dcba")).toBe(false);
  });

  it("returns true when swapping both characters fixes a two-character string", () => {
    expect(areAlmostEqual("ab", "ba")).toBe(true);
  });

  it("returns true when a non-adjacent swap fixes the strings", () => {
    expect(areAlmostEqual("converse", "conserve")).toBe(true);
  });

  it("handles the minimum string length", () => {
    expect(areAlmostEqual("a", "a")).toBe(true);
  });

  it("handles a long equal string", () => {
    expect(areAlmostEqual("a".repeat(100), "a".repeat(100))).toBe(true);
  });

  it("returns false when exactly one position differs", () => {
    expect(areAlmostEqual("ab", "aa")).toBe(false);
  });

  it("returns false when two differences do not cross-match", () => {
    expect(areAlmostEqual("ab", "ca")).toBe(false);
  });

  it("returns true when repeated characters cross-match after one swap", () => {
    expect(areAlmostEqual("aabb", "abab")).toBe(true);
  });

  it("allows swapping duplicate characters in already equal strings", () => {
    expect(areAlmostEqual("aa", "aa")).toBe(true);
  });

  it("returns false when the same characters require more than one swap", () => {
    expect(areAlmostEqual("abc", "bca")).toBe(false);
  });

  it("returns false when four repeated-character positions differ", () => {
    expect(areAlmostEqual("aabb", "bbaa")).toBe(false);
  });
});
