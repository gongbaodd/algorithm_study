import { result as libResult, init, LNode } from "../lib";

const INIT_DATA = [1, 3, 1, 4, 5, 5, 7];

export function result(deduplicateFn: (head: LNode) => LNode) {
  libResult(() => init(INIT_DATA), deduplicateFn);
}
