export class LNode {
    data: number = 0;
    next: LNode | null = null;

    constructor(data: number, next?: LNode) {
        this.data = data;
        this.next = next ?? this.next;
    }
}


export function show(head: LNode) {
    if (head.next == null) {
        return;
    }

    let cur = head;
    while (cur.next !== null) {
        cur = cur.next;
        process.stdout.write(`${cur.data} `);
    }
    process.stdout.write("\n");
}

export function result(init: () => LNode, fn: (node: LNode) => void) {
    const head = init();
    console.log("Before:");
    show(head);
    
    fn(head);
    console.log("After:");
    show(head);
}