/* eslint-disable no-param-reassign */
import { result, LNode } from "./lib";

result(
  (head): LNode => {
    const arr = [];

    let curr = head.next;
    while (curr) {
      arr.push(curr);
      curr = curr.next;
    }

    for (let i = arr.length; i > 0; i -= i) {
      arr[i - 1].next = arr[i - 2] || null;
    }

    head.next = arr[arr.length - 1];

    return head;
  }
);
