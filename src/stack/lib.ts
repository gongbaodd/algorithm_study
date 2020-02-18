import { LNode } from '../linked_node/lib';

export class Stack<T> {
    private pHead: LNode<T> = new LNode();

    isEmpty(): boolean {
        return this.pHead.next === null;
    }

    size(): number {
        let size = 0;
        let p: LNode<T> | null = this.pHead;

        for (; ;) {
            p = p?.next ?? null;

            if (p) {
                size += 1;
            } else {
                break;
            }
        }

        return size;
    }

    push(e: T) {
        const p = new LNode(e, this.pHead.next);
        this.pHead.next = p;
    }

    pop(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        let tmp = this.pHead.next as LNode<T>;
        this.pHead.next = tmp.next;
        return tmp.data;
    }



    top(): T | null {
        let data = this.pop();

        if (data !== null) {
            this.push(data);
        }

        return data;
    }

}
