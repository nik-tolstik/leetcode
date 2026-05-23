import { describe, expect, it } from "vitest";

import { lastStoneWeight } from "./solution";

describe("lastStoneWeight", () => {
  it("returns 1 for the official mixed example", () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  it("returns 0 when two stones cancel exactly", () => {
    expect(lastStoneWeight([2, 2])).toBe(0);
  });

  it("returns the stone value when only one stone exists", () => {
    expect(lastStoneWeight([7])).toBe(7);
  });

  it("handles all equal stones by repeatedly cancelling pairs", () => {
    expect(lastStoneWeight([3, 3, 3, 3, 3])).toBe(3);
  });

  it("handles already ordered stones", () => {
    expect(lastStoneWeight([1, 1, 2])).toBe(0);
  });

  it("handles already ordered stones", () => {
    expect(lastStoneWeight([3, 7, 8])).toBe(2);
  });
});
