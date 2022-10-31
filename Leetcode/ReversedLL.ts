import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let current: ListNode | null = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = current.next;

  while (current.next) {
    next = current.next; // 2 , 3
    current.next = prev; // null, 1
    prev = current; // 1, 2
    current = next; // 2, 3
  }
  current.next = prev;

  return current;
}

/*
1 -> 2 -> 3

p    c    n

*/

function printLinkedList(head: ListNode | null): void {
  if (!head) return;
  let curr = head;

  while (curr.next) {
    console.log(curr.val);
    curr = curr.next;
  }

  console.log(curr.val);
}

const head = new ListNode(5);
head.next = new ListNode(6);
head.next.next = new ListNode(9);
printLinkedList(reverseList(head));
