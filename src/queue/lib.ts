import { LNode } from "../linked_node/lib";

export class Queue<T> {
  protected pHead: LNode<T> | null = null;

  protected pEnd: LNode<T> | null = null;

  get top() {
    return this.pHead?.data ?? null;
  }

  get back() {
    return this.pEnd?.data ?? null;
  }

  constructor() {
    this.pEnd = null;
    this.pHead = null;
  }

  isEmpty() {
    return this.pHead === null;
  }

  size() {
    let size = 0;
    let p: LNode<T> | null = this.pHead;

    while (p) {
      p = p.next;
      size += 1;
    }

    return size;
  }

  enQueue(e: T) {
    const p = new LNode(e);

    if (this.pEnd) {
      this.pEnd.next = p;
      this.pEnd = p;

      return;
    }

    if (this.pHead === null) {
      this.pEnd = p;
      this.pHead = this.pEnd;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return;
    }

    this.pHead = this.pHead?.next ?? null;
    if (this.pHead === null) {
      this.pEnd = this.pHead;
    }
  }
}
