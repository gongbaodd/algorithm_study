import {LNode, result} from './lib';

result(head => {
    if (head.next == null) {
        return;
    }

    let current = head.next;
    let next = current.next;

    while(1) {
        if (next == null) {
            break;
        }

        let first = head.next;
        current.next = next.next;
        head.next = next;
        next.next = first;
        next = current.next;
    }
});