import { LNode } from "../lib";

export function reverse(_node: LNode): LNode {
  const node = _node;

  if (node.next === null) {
    return node;
  }

  const newFirst = reverse(node.next);
  node.next.next = node;
  node.next = null;

  return newFirst;
}

export function rearrage(head: LNode): LNode {
  if (!head.next) {
    return head;
  }

  let slowCursor = head.next;
  let fastCursor = head.next.next;

  while (fastCursor) {
    slowCursor = slowCursor.next as LNode;
    fastCursor = fastCursor.next?.next ?? null;
  }

  type nextNode = PropType<LNode, "next">;

  let tailCursor: nextNode = reverse(slowCursor);
  let headCursor: nextNode = head.next;

  for (;;) {
    const headNext: nextNode = headCursor?.next ?? null;
    const tailNext: nextNode = tailCursor?.next ?? null;

    const leftCursors = [headCursor, tailCursor].filter(
      (cursor) => cursor !== null
    );

    if (leftCursors.length === 0) {
      break;
    }

    if (leftCursors.length === 1) {
      (leftCursors[0] as LNode).next = null;
      break;
    }

    (headCursor as LNode).next = tailCursor;
    (tailCursor as LNode).next = headNext;

    headCursor = headNext;
    tailCursor = tailNext;
  }

  return head;
}
