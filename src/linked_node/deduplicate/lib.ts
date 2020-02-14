import {LNode, result as lib_result, init} from '../lib';

const INIT_DATA = [1,3,1,4,5,5,7];

export function result(deduplicate_fn: (head: LNode) => LNode) {
    lib_result(() => init(INIT_DATA), deduplicate_fn);
}