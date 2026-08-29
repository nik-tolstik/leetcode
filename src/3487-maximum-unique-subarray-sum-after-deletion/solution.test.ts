import { describe, expect, it } from "vitest";

import { maxSum } from "./solution";

describe("maxSum", () => {
  it("returns the sum of all elements for already unique positives", () => {
    expect(maxSum([1, 2, 3, 4, 5])).toBe(15);
  });

  it("handles duplicates by keeping unique positive elements only after deletions", () => {
    expect(maxSum([1, 1, 0, 1, 1])).toBe(1);
  });

  it("deletes negatives and keeps a unique positive subarray", () => {
    expect(maxSum([1, 2, -1, -2, 1, 0, -1])).toBe(3);
  });

  it("supports single-element arrays", () => {
    expect(maxSum([7])).toBe(7);
    expect(maxSum([-5])).toBe(-5);
  });

  it("handles all-negative arrays by returning the largest element", () => {
    expect(maxSum([-1, -2, -3, -4])).toBe(-1);
  });

  it("ignores non-positive elements in the optimal unique set", () => {
    expect(maxSum([1, -1, 1, -1, 2, 3])).toBe(6);
  });
});
