import { LNode } from "../lib";

export function ascendConnect(head1: LNode, head2: LNode): LNode {
  if (head1.next === null) {
    return head2;
  }

  if (head2.next === null) {
    return head1;
  }

  let pre1 = head1;
  let cur1 = pre1.next;
  let cur2: LNode | null = head2.next;

  while (cur2 && cur1) {
    if (cur1.data < cur2.data) {
      const next2: LNode | null = cur2?.next ?? null;

      pre1.next = cur2;
      cur2.next = cur1;
      cur2 = next2;
    }

    if (cur1.next) {
      pre1 = cur1;
      cur1 = cur1.next;
    }
  }

  return head1;
}
