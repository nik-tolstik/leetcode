import { describe, expect, it } from "vitest";

import { isValid } from "./solution";

describe("isValid", () => {
  it("returns true for an empty string", () => {
    expect(isValid("")).toBe(true);
  });

  it("returns true for the first official example", () => {
    expect(isValid("()")).toBe(true);
  });

  it("returns true for mixed valid brackets", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it("returns false when closing bracket order is wrong", () => {
    expect(isValid("(]")).toBe(false);
  });

  it("returns false for a nested mismatch", () => {
    expect(isValid("([)]")).toBe(false);
  });

  it("returns true for deeply nested valid brackets", () => {
    expect(isValid("{[()]}")).toBe(true);
  });
});
