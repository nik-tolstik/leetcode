import { describe, expect, it } from "vitest";

import { twoSum } from "./solution";

describe("twoSum", () => {
  it("returns indices for the basic example", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("finds a pair when values are not adjacent", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("works with duplicate numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
