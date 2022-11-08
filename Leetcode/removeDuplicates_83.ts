import ListNode from "./ListNode";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let curr: ListNode | null = head;

  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
console.log(deleteDuplicates(head));
