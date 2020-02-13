const CHAIN_LEN = 8;

export class LNode {
    data: number = 0;
    next: LNode | null = null;

    constructor(data: number, next?: LNode) {
        this.data = data;
        this.next = next ?? this.next;
    }
}

export function init(): LNode {
    let i = 0;

    let head = new LNode(i);
    let tmp: LNode;
    let cur = head;

    while(1) {
        i++;
        tmp = new LNode(i);
        cur.next = tmp;
        cur = tmp;

        if (i >= CHAIN_LEN-1) {
            break;
        }   
    }

    return head;
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

export function result(reverse_fn: (node: LNode) => void) {
    const head = init();
    console.log("Before reverse:");
    show(head);
    
    reverse_fn(head);
    console.log("After reverse:");
    show(head);
}