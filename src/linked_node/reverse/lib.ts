import { LNode, result as libResult } from "../lib";

const CHAIN_LEN = 8;

export { LNode };

export function init(): LNode {
  let i = 0;

  const head = new LNode(i);
  let tmp: LNode;
  let cur = head;

  for (;;) {
    i += 1;
    tmp = new LNode(i);
    cur.next = tmp;
    cur = tmp;

    if (i >= CHAIN_LEN - 1) {
      break;
    }
  }

  return head;
}

export function result(reverseFn: (node: LNode) => void) {
  libResult(init, reverseFn);
}
