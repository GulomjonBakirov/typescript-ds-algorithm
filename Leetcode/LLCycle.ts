import ListNode from "./ListNode";

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow!.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

const head = new ListNode(5);
head.next = new ListNode(6);
head.next.next = new ListNode(9);
console.log(hasCycle(head));
