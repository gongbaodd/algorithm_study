/* eslint-disable no-param-reassign */
import { LNode, result } from "./lib";

result((head: LNode) => {
  if (head.next == null) {
    return;
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
});
