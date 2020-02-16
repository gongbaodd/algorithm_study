import { LNode } from "../lib";

export const reversefn = (_head: LNode): LNode => {
  const head = _head;

  if (!head.next) {
    return head;
  }

  const first = head.next;
  const reverse = (_node: LNode): LNode => {
    const node = _node;

    if (node.next == null) {
      return node;
    }

    const last = reverse(node.next);
    node.next.next = node; // reverse the next pointer back to self
    node.next = null;

    return last;
  };

  const last = reverse(first as LNode);
  head.next = last;

  return head;
};
