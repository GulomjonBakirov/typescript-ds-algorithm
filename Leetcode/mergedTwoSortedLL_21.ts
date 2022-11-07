import ListNode from "./ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
}

const head1 = new ListNode(1);
head1.next = new ListNode(4);
head1.next.next = new ListNode(7);

const head2 = new ListNode(5);
head2.next = new ListNode(6);
head2.next.next = new ListNode(9);

console.log(mergeTwoLists(head1, head2));
