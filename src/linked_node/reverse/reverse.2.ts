/* eslint-disable no-param-reassign */
import { result } from "./lib";

result(head => {
  if (head.next == null) {
    return;
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
});
