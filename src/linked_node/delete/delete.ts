import { LNode } from "../lib";

export function del(head: LNode, num: number): LNode {
  if (!head.next) {
    return head;
  }

  let cur: LNode | null = head;

  for (let i = 0; i < num; i += 1) {
    const pre = cur;
    cur = cur?.next ?? null;

    if (cur === null) {
      break;
    }

    pre.next = cur.next;
  }

  return head;
}
