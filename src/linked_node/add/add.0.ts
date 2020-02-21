import { LNode } from "../lib";

export const add = (head1: LNode, head2: LNode): LNode => {
  if (head1.next === null) {
    return head2;
  }

  if (head2.next === null) {
    return head1;
  }

  let c = 0;
  let cursor1: LNode | null = head1.next;
  let cursor2: LNode | null = head2.next;
  const head3 = new LNode(0);
  let cursor3 = head3;

  for (;;) {
    const sum = (cursor1?.data ?? 0) + (cursor2?.data ?? 0) + c;
    const node = new LNode(sum % 10);
    c = parseInt((sum / 10).toString(), 10);

    cursor3.next = node;
    cursor3 = node;

    if (cursor1 !== null && cursor2 !== null) {
      cursor1 = cursor1.next;
      cursor2 = cursor2.next;
    } else if (c === 0) {
      const [cursor] = [cursor1, cursor2].filter(cur => cur !== null);
      cursor3.next = cursor?.next ?? null;
      break;
    }
  }

  return head3;
};
