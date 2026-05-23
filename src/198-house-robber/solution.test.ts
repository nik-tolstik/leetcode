import { describe, expect, it } from "vitest";

import { rob } from "./solution";

describe("rob", () => {
  it("returns the maximum amount for the first official example", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  it("returns the maximum amount for the second official example", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });

  it("handles a single house", () => {
    expect(rob([5])).toBe(5);
  });

  it("chooses the larger amount from two adjacent houses", () => {
    expect(rob([2, 1])).toBe(2);
  });

  it("handles zero-valued houses", () => {
    expect(rob([0, 0, 0])).toBe(0);
  });

  it("does not require choosing the first or last house", () => {
    expect(rob([2, 1, 1, 2])).toBe(4);
  });
});
