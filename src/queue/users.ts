import { Queue } from "../queue/lib";
import { LNode } from "../linked_node/lib";

interface User {
  id: number;
  index: number;
  name: string;
}

export class UserQueue extends Queue<User> {
  private updateIndex() {
    if (!this.pHead?.next) {
      return;
    }

    let i = 0;
    let current = this.pHead;
    do {
      (current.data as User).index = i;
      i += 1;
      current = current.next as LNode<User>;
    } while (current);
  }

  deQueue() {
    super.deQueue();
    this.updateIndex();
  }

  enQueue(user: User) {
    super.enQueue(user);
    this.updateIndex();
  }
}
