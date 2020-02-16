import { LNode } from "../lib";

export function reverse(_head: LNode): LNode {
  const head = _head;
  if (head.next === null) {
    return head;
  }

  const newHead = reverse(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}

export function nearkReverse(head: LNode, k: number): LNode {
  if (head.next === null) {
    return head;
  }

  let pre = head;
  let current = pre.next;

  while (current) {
    let next: LNode | null = current;
    for (let i = 0; i < k - 1; i += 1) {
      next = next?.next ?? null;
      if (next === null) {
        pre.next = current;
        return head;
      }
    }
    const nNext = next.next;
    next.next = null;

    pre.next = reverse(current);
    pre = current;
    current = nNext;
  }

  return head;
}
