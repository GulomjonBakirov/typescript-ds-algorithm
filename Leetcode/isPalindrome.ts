import ListNode from "./ListNode";

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;

  let curr: ListNode = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = curr.next;

  while (curr.next) {
    next = curr!.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  curr.next = prev;
  console.log(curr);
  console.log(head);

  return true;
}

const head = new ListNode(5);
head.next = new ListNode(6);
head.next.next = new ListNode(9);
console.log(isPalindrome(head));
