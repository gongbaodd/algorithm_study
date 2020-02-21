import { LNode } from "../lib";

export const deduplicate = (head: LNode): LNode => {
  let curOuter = head.next;
  let curInner = curOuter?.next ?? null;
  let preInner = curOuter;

  while (curOuter !== null) {
    while (curInner !== null) {
      if (curOuter.data === curInner.data) {
        (preInner as LNode).next = curInner.next;
      }
      preInner = curInner;
      curInner = curInner?.next ?? null;
    }
    curOuter = curOuter.next;
    curInner = curOuter?.next ?? null;
    preInner = curOuter;
  }

  return head;
};
