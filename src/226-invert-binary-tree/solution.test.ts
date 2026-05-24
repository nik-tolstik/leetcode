import { describe, expect, it } from "vitest";

import { TreeNode, invertTree } from "./solution";

describe("invertTree", () => {
  it("inverts a full tree example", () => {
    const root = createTree([4, 2, 7, 1, 3, 6, 9]);

    expect(toLevelOrder(invertTree(root))).toEqual([4, 7, 2, 9, 6, 3, 1]);
  });

  it("returns null for an empty tree", () => {
    expect(toLevelOrder(invertTree(null))).toBe(null);
  });

  it("keeps a single-node tree unchanged", () => {
    expect(toLevelOrder(invertTree(new TreeNode(1)))).toEqual([1]);
  });

  it("inverts a skewed tree", () => {
    const root = createTree([4, 2, null, 1]);

    expect(toLevelOrder(invertTree(root))).toEqual([4, null, 2, null, 1]);
  });

  it("works with duplicate values", () => {
    const root = createTree([1, 1, 1, 1, 1, null, 1]);

    expect(toLevelOrder(invertTree(root))).toEqual([1, 1, 1, null, 1, 1, 1]);
  });
});

const createTree = (values: Array<number | null>): TreeNode | null => {
  if (values.length === 0 || values[0] === null) {
    return null;
  }

  const nodes: Array<TreeNode | null> = values.map((value) => {
    if (value === null) return null;
    return new TreeNode(value);
  });

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) {
      continue;
    }

    const left = nodes[2 * i + 1];
    const right = nodes[2 * i + 2];

    node.left = left ?? null;
    node.right = right ?? null;
  }

  return nodes[0];
};

const toLevelOrder = (root: TreeNode | null): number[] | null => {
  if (!root) {
    return null;
  }

  const result: Array<number | null> = [];
  const queue: Array<TreeNode | null> = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (!node) {
      result.push(null);
      continue;
    }

    result.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }

  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result as number[];
};
