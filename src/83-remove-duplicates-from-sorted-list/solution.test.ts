import { describe, expect, it } from "vitest";

import { deleteDuplicates, ListNode } from "./solution";

const createNodesFromArray = (nums: number[]): ListNode | null => {
  if (nums.length === 0) return null;

  const head = new ListNode(nums[0]);
  let current = head;

  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i]);
    current = current.next;
  }

  return head;
};

const createArrayFromNodes = (head: ListNode | null): number[] => {
  if (!head) return [];

  let current = head;
  const result: number[] = [];

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

describe("coinChange", () => {
  it("example 1", () => {
    const input = [1, 1, 2];
    const output = [1, 2];

    expect(
      createArrayFromNodes(deleteDuplicates(createNodesFromArray(input))),
    ).toEqual(output);
  });

  it("example 1", () => {
    const input = [1, 1, 2, 3, 3];
    const output = [1, 2, 3];

    expect(
      createArrayFromNodes(deleteDuplicates(createNodesFromArray(input))),
    ).toEqual(output);
  });
});
