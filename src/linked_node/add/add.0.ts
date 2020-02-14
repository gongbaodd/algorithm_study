import { LNode } from '../lib';
import { result } from './lib';

result((head1, head2) => {
    if (head1.next === null) {
        return head2;
    }

    if (head2.next === null) {
        return head1;
    }

    let c = 0;
    let cursor1: LNode | null = head1.next;
    let cursor2: LNode | null = head2.next;
    let head3 = new LNode(0);
    let cursor3 = head3;

    while (1) {
        let sum = (cursor1?.data??0) + (cursor2?.data??0) + c;
        let node = new LNode(sum % 10);
        c = parseInt((sum/10).toString(), 10);

        cursor3.next = node;
        cursor3 = node;

        if (cursor1 !== null && cursor2 !== null) {
            cursor1 = cursor1.next;
            cursor2 = cursor2.next;
            continue;
        }

        if (c > 0) {
            continue;
        }

        [cursor1, cursor2]
            .filter(node => node === null)
            .map(node => cursor3.next = node?.next??null);
        break;
    }

    return head3;
});