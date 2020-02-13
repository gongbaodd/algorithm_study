import {LNode, result as lib_result} from '../lib';

const INIT_DATA = [1,3,1,4,5,5,7];

export function result(deduplicate_fn: (head: LNode) => LNode) {
    lib_result(() => {
        let head = new LNode(0);
        let curr = head;

        for(let index of INIT_DATA) {
            curr.next = new LNode(index);
            curr = curr.next;
        }

        return head;
    }, deduplicate_fn);
}