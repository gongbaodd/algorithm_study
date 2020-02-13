import {LNode} from '../lib';
import {result} from './lib';

result(head => {
    let cur_outer = head.next;
    let cur_inner = cur_outer?.next??null;
    let pre_inner = cur_outer;

    while(cur_outer !== null) {
        while(cur_inner !== null) {
            if (cur_outer.data === cur_inner.data) {
                (pre_inner as LNode).next = cur_inner.next;
            }
            pre_inner = cur_inner;
            cur_inner = cur_inner?.next??null;
        }
        cur_outer = cur_outer.next;
        cur_inner = cur_outer?.next??null;
        pre_inner = cur_outer;
    }

    return head;
});