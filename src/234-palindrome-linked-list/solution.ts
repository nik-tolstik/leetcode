// https://leetcode.com/problems/palindrome-linked-list

import { ListNode } from "../helpers";

export function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  let curr = slow;
  let reversed = null;

  // Reverse list nodes
  while (curr) {
    const next = curr.next;
    curr.next = reversed;
    reversed = curr;
    curr = next;
  }

  let left = head;
  let right = reversed;

  while (right) {
    if (left.val !== right.val) {
      return false;
    }

    right = right.next;
    left = left.next;
  }

  return true;
}
