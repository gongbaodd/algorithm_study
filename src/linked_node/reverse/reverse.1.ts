import { LNode, result } from './lib';

result(head => {
    let first = head.next;
    let reverse = (node:LNode): LNode => {
        if (node.next == null) {
            return node;
        }

        let last = reverse(node.next);
        node.next.next = node;// reverse the next pointer back to self
        node.next = null;

        return last;
    }

    let last = reverse(first as LNode);
    head.next = last;
});