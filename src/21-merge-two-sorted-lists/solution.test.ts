import { describe, expect, it } from "vitest";

import { mergeTwoLists } from "./solution";
import { createArrayFromNodes, createNodesFromArray } from "../helpers";

describe("mergeTwoLists", () => {
  it("merges two sorted lists from the official example", () => {
    const list1 = createNodesFromArray([1, 2, 4]);
    const list2 = createNodesFromArray([1, 3, 4]);

    expect(createArrayFromNodes(mergeTwoLists(list1, list2))).toEqual([
      1, 1, 2, 3, 4, 4,
    ]);
  });

  it("handles two empty lists", () => {
    expect(createArrayFromNodes(mergeTwoLists(null, null))).toEqual([]);
  });

  it("handles one empty list", () => {
    expect(
      createArrayFromNodes(mergeTwoLists(null, createNodesFromArray([0]))),
    ).toEqual([0]);
  });

  it("handles duplicate values across lists", () => {
    const list1 = createNodesFromArray([1, 1, 2]);
    const list2 = createNodesFromArray([1, 3, 3]);

    expect(createArrayFromNodes(mergeTwoLists(list1, list2))).toEqual([
      1, 1, 1, 2, 3, 3,
    ]);
  });

  it("handles negative values", () => {
    const list1 = createNodesFromArray([-10, -5, 0]);
    const list2 = createNodesFromArray([-6, 2]);

    expect(createArrayFromNodes(mergeTwoLists(list1, list2))).toEqual([
      -10, -6, -5, 0, 2,
    ]);
  });
});
