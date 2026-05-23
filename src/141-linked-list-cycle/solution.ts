// https://leetcode.com/problems/linked-list-cycle/

import { ListNode } from "../helpers";

export function hasCycle(head: ListNode | null): boolean {
  if (!head || head.next === null) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next?.next ?? null;

    if (fast === slow) return true;
  }

  return false;
}
