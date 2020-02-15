import { LNode } from "../lib";

export function lastK(head: LNode, k: number): PropType<LNode, "data"> | null {
  let slowCursor = head.next;
  let fastCursor = head.next;

  for (let i = 0; i < k; i += 1) {
    fastCursor = fastCursor?.next ?? null;
  }

  if (!fastCursor) {
    return null;
  }

  while (fastCursor) {
    slowCursor = slowCursor?.next ?? null;
    fastCursor = fastCursor?.next ?? null;
  }

  return (slowCursor as LNode).data;
}
