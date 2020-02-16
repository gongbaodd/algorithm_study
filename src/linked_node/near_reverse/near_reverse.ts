import { LNode } from "../lib";

export function nearReverse(_head: LNode): LNode {
  const head = _head;
  if (!head.next) {
    return head;
  }

  let pre = head;
  let current = head.next;
  let { next } = current;

  while (next) {
    const nNext = next.next;
    next.next = current;
    current.next = nNext;
    pre.next = next;

    pre = current;
    current = nNext as LNode;
    next = current?.next ?? null;
  }

  return head;
}
