import { describe, expect, it } from "vitest";

import { reverseList } from "./solution";
import { createArrayFromNodes, createNodesFromArray } from "../helpers";

describe("reverseList", () => {
  it("returns null for an empty list", () => {
    expect(reverseList(null)).toBeNull();
  });

  it("returns the same node for a single-node list", () => {
    expect(
      createArrayFromNodes(reverseList(createNodesFromArray([1]))),
    ).toEqual([1]);
  });

  it("reverses an even-length list", () => {
    expect(
      createArrayFromNodes(reverseList(createNodesFromArray([1, 2, 3, 4]))),
    ).toEqual([4, 3, 2, 1]);
  });

  it("reverses an odd-length list", () => {
    expect(
      createArrayFromNodes(reverseList(createNodesFromArray([1, 2, 3]))),
    ).toEqual([3, 2, 1]);
  });

  it("reverses a list with negative values", () => {
    expect(
      createArrayFromNodes(reverseList(createNodesFromArray([0, -1, 5, -7]))),
    ).toEqual([-7, 5, -1, 0]);
  });
});
