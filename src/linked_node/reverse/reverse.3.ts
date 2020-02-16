import { LNode } from "../lib";

export const reverseFn = (_head: LNode): LNode => {
  const head = _head;
  const arr = [];

  let curr = head.next;
  while (curr) {
    const { next } = curr;
    arr.push(curr);
    curr.next = null;
    curr = next;
  }

  for (let i = arr.length; i > 0; i -= 1) {
    arr[i - 1].next = arr[i - 2] ?? null;
  }

  head.next = arr[arr.length - 1];

  return head;
};
