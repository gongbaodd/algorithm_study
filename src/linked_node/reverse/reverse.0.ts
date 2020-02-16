import { LNode } from "../lib";

export function reversefn(_head: LNode): LNode {
  const head = _head;

  if (head.next == null) {
    return head;
  }

  let cur = head.next;
  let { next } = cur;
  let pre = cur;
  pre.next = null; // in case of a circular reference

  for (;;) {
    cur = next as LNode;
    next = cur.next;

    if (!next) {
      head.next = cur;
      cur.next = pre;
      break;
    }

    cur.next = pre;
    pre = cur;
  }

  return head;
}
