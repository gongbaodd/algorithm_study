import { LNode } from "./lib";

function merge(head1: LNode | null, head2: LNode | null) {
  if (!head1) {
    return head2;
  }

  if (!head2) {
    return head1;
  }

  let result: LNode;

  if (head1.data < head2.data) {
    result = head1;
    result.down = merge(head1.down, head2);
  } else {
    result = head2;
    result.down = merge(head1, head2.down);
  }
  return result;
}

export function flatten(_head: LNode): LNode | null {
  let head: LNode | null = _head;
  if (head.right === null) {
    return head;
  }

  if (head.down === null) {
    return head;
  }

  head.right = flatten(head.right);
  head = merge(head, head.right);

  return head;
}
