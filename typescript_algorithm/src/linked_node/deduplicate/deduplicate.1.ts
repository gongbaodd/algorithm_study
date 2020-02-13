import { LNode } from '../lib';
import { result } from './lib';

result(head => {
    const remove_dup = (node: LNode): LNode => {
        if (node.next === null) {
            return node;
        }

        node.next = remove_dup(node.next);
        let cursor: LNode | null = node.next;
        let current: LNode = node;

        while(cursor) {
            if (cursor.data === node.data) {
                current.next = cursor.next;
                cursor = current.next;
            } else {
                cursor = cursor.next;
                current = current.next as LNode;
            }
        }

        return node;
    };

    head.next = remove_dup(head.next as LNode);

    return head;
});
