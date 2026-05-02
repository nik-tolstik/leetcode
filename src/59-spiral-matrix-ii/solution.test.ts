import { describe, expect, it } from "vitest";

import { generateMatrix } from "./solution";

describe("generateMatrix", () => {
  it("generates the official 3 by 3 example", () => {
    expect(generateMatrix(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });

  it("generates the official 1 by 1 example", () => {
    expect(generateMatrix(1)).toEqual([[1]]);
  });

  it("generates an even-sized matrix in spiral order", () => {
    expect(generateMatrix(4)).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]);
  });

  it("generates a 2 by 2 matrix", () => {
    expect(generateMatrix(2)).toEqual([
      [1, 2],
      [4, 3],
    ]);
  });
});
