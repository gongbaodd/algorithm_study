import { LNode, show, init, info } from "../lib";

const LNODES_1 = [3, 4, 5, 6, 7, 8];
const LNODES_2 = [9, 8, 7, 6, 5];

export function result(fn: (head1: LNode, head2: LNode) => LNode) {
  const [head1, head2] = [init(LNODES_1), init(LNODES_2)];
  info("Head1:");
  show(head1);

  info("Head2:");
  show(head2);

  const head3 = fn(head1, head2);
  info("After:");
  show(head3);
}
