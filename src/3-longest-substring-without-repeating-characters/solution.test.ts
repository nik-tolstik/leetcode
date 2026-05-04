import { describe, expect, it } from "vitest";

import { lengthOfLongestSubstring } from "./solution";

describe("lengthOfLongestSubstring", () => {
  it("returns the length from the first official example", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it("returns the length from the second official example", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("returns the length from the third official example", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("handles an empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it("handles spaces and symbols as regular characters", () => {
    expect(lengthOfLongestSubstring("a b!a")).toBe(4);
  });

  it("handles repeated characters after a longer unique prefix", () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });
});
