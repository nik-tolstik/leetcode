import { describe, expect, it } from "vitest";

import { minWindow } from "./solution";

describe("minWindow", () => {
  it("returns the minimum window from the first official example", () => {
    expect(minWindow("KLADOBECODEBANC", "ABC")).toBe("BANC");
  });

  it("returns the whole string from the second official example", () => {
    expect(minWindow("a", "a")).toBe("a");
  });

  it("returns the whole string from the second official example", () => {
    expect(minWindow("a", "b")).toBe("");
  });

  it("returns an empty string from the third official example", () => {
    expect(minWindow("a", "aa")).toBe("");
  });

  it("requires duplicate characters from t", () => {
    expect(minWindow("AAABBC", "AABC")).toBe("AABBC");
  });

  it("treats uppercase and lowercase letters as different characters", () => {
    expect(minWindow("aA", "Aa")).toBe("aA");
  });

  it("[bbaac, aba] => baa", () => {
    expect(minWindow("bbaac", "aba")).toBe("baa");
  });

  it("[bbaac, aba] => baa", () => {
    expect(minWindow("cabwefgewcwaefgcf", "cae")).toBe("cwae");
  });
});
