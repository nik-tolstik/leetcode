import { describe, expect, it } from "vitest";

import { threeSum } from "./solution";

function normalizeTriplets(triplets: number[][]): number[][] {
  return triplets
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort((a, b) => {
      for (let i = 0; i < a.length; i++) {
        const difference = a[i]! - b[i]!;

        if (difference !== 0) {
          return difference;
        }
      }

      return 0;
    });
}

describe("threeSum", () => {
  it("returns the official example triplets", () => {
    expect(normalizeTriplets(threeSum([-1, 0, 1, 2, -1, -4]))).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
  it("returns an empty array when no triplet sums to zero", () => {
    expect(normalizeTriplets(threeSum([0, 1, 1]))).toEqual([]);
  });
  it("returns the all-zero official example once", () => {
    expect(normalizeTriplets(threeSum([0, 0, 0]))).toEqual([[0, 0, 0]]);
  });
  it("returns an empty array for fewer than three numbers", () => {
    expect(normalizeTriplets(threeSum([0, 0]))).toEqual([]);
  });
  it("does not duplicate identical triplets", () => {
    expect(normalizeTriplets(threeSum([0, 0, 0, 0]))).toEqual([[0, 0, 0]]);
  });
});
