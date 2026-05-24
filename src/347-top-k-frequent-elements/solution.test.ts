import { describe, expect, it } from "vitest";

import { topKFrequent } from "./solution";

describe("topKFrequent", () => {
  it("returns the expected values for the first official example", () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);

    expect(toSortedCopy(result)).toEqual([1, 2]);
  });

  it("returns the expected values for the second official example", () => {
    const result = topKFrequent([1], 1);

    expect(result).toEqual([1]);
  });

  it("returns k=1 as the most frequent element", () => {
    expect(toSortedCopy(topKFrequent([1, 2, 2, 3, 3, 3], 1))).toEqual([3]);
  });

  it("handles negative values and ties", () => {
    expect(toSortedCopy(topKFrequent([1, -1, -1, 2, 2], 2))).toEqual([-1, 2]);
  });

  it("returns all unique elements when k equals length", () => {
    expect(toSortedCopy(topKFrequent([4, 3, 2, 1], 4))).toEqual([1, 2, 3, 4]);
  });
});

const toSortedCopy = (values: number[]) => {
  return [...values].sort((a, b) => a - b);
};
