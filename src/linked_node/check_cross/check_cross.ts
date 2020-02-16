import { LNode } from "../lib";

export function findTailAndLen(head: LNode): [LNode, number] {
  let cur = head.next;
  let len = 1;

  while (cur?.next) {
    cur = cur.next;
    len += 1;
  }

  return [cur as LNode, len];
}

export function findCross(head1: LNode, head2: LNode): LNode | null {
  if (!head1.next || !head2.next) {
    return null;
  }

  const [tail1, len1] = findTailAndLen(head1);
  const [tail2, len2] = findTailAndLen(head2);

  if (tail1 !== tail2) {
    return null;
  }

  let cur1: LNode | null = head1;
  let cur2: LNode | null = head2;

  if (len1 > len2) {
    const sub = len1 - len2;
    for (let i = 0; i < sub; i += 1) {
      cur1 = cur1?.next ?? null;
    }
  } else {
    const sub = len2 - len1;
    for (let i = 0; i < sub; i += 1) {
      cur2 = cur2?.next ?? null;
    }
  }

  while (cur1 !== cur2) {
    cur1 = cur1?.next ?? null;
    cur2 = cur2?.next ?? null;
  }

  return cur1;
}
