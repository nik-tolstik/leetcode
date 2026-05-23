import { describe, expect, it } from "vitest";

import { hasCycle } from "./solution";
import { ListNode } from "../helpers";

describe("hasCycle", () => {
  it("returns true when a cycle exists in the middle of the list", () => {
    const head = createCycle([3, 2, 0, -4], 1);

    expect(hasCycle(head)).toBe(true);
  });

  it("returns true when the list cycles to the first node", () => {
    const head = createCycle([1, 2], 0);

    expect(hasCycle(head)).toBe(true);
  });

  it("returns false when there is no cycle", () => {
    const head = createCycle([1], -1);

    expect(hasCycle(head)).toBe(false);
  });

  it("returns false for an empty list", () => {
    expect(hasCycle(null)).toBe(false);
  });

  it("returns false for a single-node list without a cycle", () => {
    const head = new ListNode(5);

    expect(hasCycle(head)).toBe(false);
  });
});

const createCycle = (values: number[], pos: number): ListNode | null => {
  if (values.length === 0) {
    return null;
  }

  const nodes = values.map((value) => new ListNode(value));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos >= 0 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos];
  }

  return nodes[0];
};
