// https://leetcode.com/problems/clone-graph/

export class Node {
  val: number;
  neighbors: Node[];

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export function cloneGraph(node: Node | null): Node | null {
  function clone(node: Node | null, map: Map<Node, Node> = new Map()): Node {
    if (!node) return null;

    if (map.has(node)) {
      return map.get(node);
    }

    const copiedNode = new Node(node.val, []);
    map.set(node, copiedNode);

    node.neighbors.forEach((n) => {
      copiedNode.neighbors.push(clone(n, map));
    });

    return copiedNode;
  }

  return clone(node);
}
