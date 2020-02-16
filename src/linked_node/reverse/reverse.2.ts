import { LNode } from "../lib";

export const reverseFn = (_head: LNode): LNode => {
  const head = _head;
  if (head.next == null) {
    return head;
  }

  const current = head.next;
  let { next } = current;

  for (;;) {
    if (next == null) {
      break;
    }

    const first = head.next;
    current.next = next.next;
    head.next = next;
    next.next = first;
    next = current.next;
  }

  return head;
};
