import { describe, expect, it } from "vitest";

import { characterReplacement } from "./solution";

describe("characterReplacement", () => {
  it("returns the full length for the first official example", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });

  it("returns the full length for the second official example", () => {
    expect(characterReplacement("AABABBA", 1)).toBe(4);
  });

  it("returns 0 for an empty string", () => {
    expect(characterReplacement("", 1)).toBe(0);
  });

  it("returns the string length when all characters are already equal", () => {
    expect(characterReplacement("AAAA", 2)).toBe(4);
  });

  it("returns the full length when replacements are enough", () => {
    expect(characterReplacement("ABCDE", 4)).toBe(5);
  });
});
