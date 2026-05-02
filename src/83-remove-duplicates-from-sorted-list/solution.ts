// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

import { ListNode } from "../helpers";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;

  while (current && current.next) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
