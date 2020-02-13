import {LNode, result} from './lib';

result((head: LNode) => {
    if (head.next == null) {
        return;
    }

    let cur = head.next;
    let next = cur.next;
    let pre = cur;
    pre.next = null; // in case of a circular reference

    while (1) {
        cur = next as LNode;
        next = cur.next;

        if (next) {
            cur.next = pre;
            pre = cur;
            continue;
        }

        head.next = cur;
        cur.next = pre;
        break;
    }
});
