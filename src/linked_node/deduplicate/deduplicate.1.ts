import { LNode } from "../lib";

export const deduplicate = (_head: LNode): LNode => {
  const head = _head;
  const removeDup = (_node: LNode): LNode => {
    const node = _node;
    if (node.next === null) {
      return node;
    }

    node.next = removeDup(node.next);
    let cursor: LNode | null = node.next;
    let current: LNode = node;

    while (cursor) {
      if (cursor.data === node.data) {
        current.next = cursor.next;
        cursor = current.next;
      } else {
        cursor = cursor.next;
        current = current.next as LNode;
      }
    }

    return node;
  };

  head.next = removeDup(head.next as LNode);

  return head;
};
