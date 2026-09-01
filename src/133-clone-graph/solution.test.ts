import { describe, expect, it } from "vitest";

import { cloneGraph, Node } from "./solution";

describe("cloneGraph", () => {
  it("clones a single isolated node", () => {
    const input = createGraph([[]]);
    const output = cloneGraph(input);

    expect(output).not.toBeNull();
    expect(output!.val).toBe(1);
    expect(output!.neighbors).toEqual([]);
    expect(output).not.toBe(input);
  });

  it("clones the official sample graph without sharing node references", () => {
    const input = createGraph([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]);
    const output = cloneGraph(input);

    expect(graphToAdjMap(input)).toEqual(graphToAdjMap(output));
    expectNoSharedNodeReferences(input, output);
  });

  it("clones a two-node cyclic graph", () => {
    const input = createGraph([[2], [1]]);
    const output = cloneGraph(input);

    expect(graphToAdjMap(input)).toEqual(graphToAdjMap(output));
    expectNoSharedNodeReferences(input, output);
  });
});

const createGraph = (adjacency: number[][]): Node | null => {
  if (adjacency.length === 0) {
    return null;
  }

  const nodes = adjacency.map((_, index) => new Node(index + 1));

  for (let i = 0; i < adjacency.length; i++) {
    nodes[i].neighbors = adjacency[i].map((value) => nodes[value - 1]);
  }

  return nodes[0];
};

const collectNodes = (start: Node | null): Node[] => {
  if (!start) {
    return [];
  }

  const visited = new Set<Node>();
  const queue: Node[] = [start];
  visited.add(start);

  while (queue.length > 0) {
    const current = queue.shift()!;

    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return [...visited];
};

const graphToAdjMap = (start: Node | null): [number, number[]][] => {
  const nodes = collectNodes(start);
  const map = new Map<number, number[]>();

  for (const node of nodes) {
    map.set(
      node.val,
      [...node.neighbors.map((neighbor) => neighbor.val)].sort((a, b) => a - b),
    );
  }

  return [...map.entries()].sort(([a], [b]) => a - b);
};

const expectNoSharedNodeReferences = (
  original: Node | null,
  cloned: Node | null,
): void => {
  const originalMap = collectNodes(original);
  const clonedMap = collectNodes(cloned);

  if (originalMap.length !== clonedMap.length) {
    expect(originalMap.length).toBe(clonedMap.length);
    return;
  }

  const originalsByValue = new Map(originalMap.map((node) => [node.val, node]));
  const clonesByValue = new Map(clonedMap.map((node) => [node.val, node]));

  for (const [value, originalNode] of originalsByValue) {
    const clonedNode = clonesByValue.get(value);

    expect(clonedNode).toBeDefined();
    expect(clonedNode).not.toBe(originalNode);
  }
};
