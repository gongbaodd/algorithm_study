/* eslint-disable no-param-reassign */
import { LNode, result } from "./lib";

result(
  (head): LNode => {
    const first = head.next;
    const reverse = (node: LNode): LNode => {
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
  }
);
