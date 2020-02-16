// https://www.cnblogs.com/nipan/p/4098592.html
import { LNode, init } from "../lib";

export function makeLoop(): LNode {
  const head = init([1, 2, 3, 4, 5, 6, 7]);
  let current: LNode = head.next as LNode;

  while (current.next) {
    current = current.next;
  }

  current.next = head.next?.next?.next ?? null;

  return head;
}

export function findMeet(head: LNode): LNode | null {
  let slow = head.next;
  let fast = head.next;

  for (;;) {
    if (fast === null || slow === null) {
      return null;
    }

    slow = slow?.next ?? null;
    fast = fast?.next?.next ?? null;

    if (slow === fast) {
      return slow;
    }
  }
}

export function findEntrance(head: LNode, meetNode: LNode): LNode | null {
  let aCur = head.next;
  let bCur: LNode | null = meetNode;

  while (aCur !== bCur) {
    aCur = aCur?.next ?? null;
    bCur = bCur?.next ?? null;
  }

  return aCur;
}
