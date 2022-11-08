import ListNode from "./ListNode";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let curr: ListNode | null = head;

  while (head && head.val == val) {
    head = head.next;
  }

  while (curr && curr.next) {
    if (curr.next.val == val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);

console.log(removeElements(head, 2));
