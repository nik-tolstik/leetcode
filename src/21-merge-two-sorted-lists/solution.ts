// https://leetcode.com/problems/merge-two-sorted-lists/

import { ListNode } from "../helpers";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  const sorted = new ListNode(0);
  let curr = sorted;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  curr.next = list1 ?? list2;

  return sorted.next;
}
