export const createNodesFromArray = (nums: number[]): ListNode | null => {
  if (nums.length === 0) return null;

  const head = new ListNode(nums[0]);
  let current = head;

  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i]);
    current = current.next;
  }

  return head;
};

export const createArrayFromNodes = (head: ListNode | null): number[] => {
  if (!head) return [];

  let current = head;
  const result: number[] = [];

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const reverseListNode = (head: ListNode) => {
  let curr = head;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
