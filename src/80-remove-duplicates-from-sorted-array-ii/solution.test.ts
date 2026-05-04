import { describe, expect, it } from "vitest";

import { removeDuplicates } from "./solution";

function expectInPlaceResult(nums: number[], expectedNums: number[]): void {
  const k = removeDuplicates(nums);

  expect(k).toBe(expectedNums.length);
  expect(nums.slice(0, k)).toEqual(expectedNums);
}

describe("removeDuplicates", () => {
  it("removes extra duplicates in the first official example", () => {
    expectInPlaceResult([1, 1, 1, 2, 2, 3], [1, 1, 2, 2, 3]);
  });

  it("removes extra duplicates in the second official example", () => {
    expectInPlaceResult(
      [0, 0, 1, 1, 1, 1, 2, 3, 3],
      [0, 0, 1, 1, 2, 3, 3],
    );
  });

  it("keeps a single-element array unchanged", () => {
    expectInPlaceResult([7], [7]);
  });

  it("keeps a two-element duplicate array unchanged", () => {
    expectInPlaceResult([4, 4], [4, 4]);
  });

  it("keeps a two-element distinct array unchanged", () => {
    expectInPlaceResult([-3, 8], [-3, 8]);
  });

  it("keeps at most two copies when all values are equal", () => {
    expectInPlaceResult([5, 5, 5, 5], [5, 5]);
  });

  it("keeps arrays with no duplicates unchanged", () => {
    expectInPlaceResult([-5, -2, 0, 3, 9], [-5, -2, 0, 3, 9]);
  });

  it("handles negative values and boundary duplicates", () => {
    expectInPlaceResult(
      [-10000, -10000, -10000, -1, -1, 0, 0, 0, 10000],
      [-10000, -10000, -1, -1, 0, 0, 10000],
    );
  });

  it("keeps arrays that already satisfy the duplicate limit", () => {
    expectInPlaceResult([-2, -2, 0, 1, 1, 3], [-2, -2, 0, 1, 1, 3]);
  });

  it("removes extras from consecutive long duplicate runs", () => {
    expectInPlaceResult(
      [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3],
      [1, 1, 2, 2, 3, 3],
    );
  });

  it("handles duplicate runs separated by single values", () => {
    expectInPlaceResult(
      [-4, -4, -4, -2, 0, 0, 0, 1, 2, 2, 2, 6],
      [-4, -4, -2, 0, 0, 1, 2, 2, 6],
    );
  });
});
