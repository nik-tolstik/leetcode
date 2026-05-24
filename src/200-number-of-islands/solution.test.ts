import { describe, expect, it } from "vitest";

import { numIslands } from "./solution";

describe("numIslands", () => {
  it("returns 1 for the first official example", () => {
    expect(
      numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ]),
    ).toBe(1);
  });

  it("returns 3 for the second official example", () => {
    expect(
      numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ]),
    ).toBe(3);
  });

  it("returns 0 for an empty grid", () => {
    expect(numIslands([])).toBe(0);
  });

  it("returns 1 for a single land cell", () => {
    expect(numIslands([["1"]])).toBe(1);
  });

  it("returns 0 for a single water cell", () => {
    expect(numIslands([["0"]])).toBe(0);
  });

  it("counts checkerboard islands correctly", () => {
    expect(
      numIslands([
        ["1", "0", "1", "0"],
        ["0", "1", "0", "1"],
        ["1", "0", "1", "0"],
      ]),
    ).toBe(6);
  });
});
