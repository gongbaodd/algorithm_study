import { LNode, result as lib_result } from "../lib";

const CHAIN_LEN = 8;

export { LNode };

export function init(): LNode {
  let i = 0;

  const head = new LNode(i);
  let tmp: LNode;
  let cur = head;

  while (1) {
    i++;
    tmp = new LNode(i);
    cur.next = tmp;
    cur = tmp;

    if (i >= CHAIN_LEN - 1) {
      break;
    }
  }

  return head;
}

export function result(reverse_fn: (node: LNode) => void) {
  const head = init();
  lib_result(init, reverse_fn);
}
