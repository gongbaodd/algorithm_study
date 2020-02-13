const CHAIN_LEN = 8;

class LNode {
    data: number = 0;
    next: LNode | null = null;

    constructor(data: number, next?: LNode) {
        this.data = data;
        this.next = next ?? this.next;
    }
}

function init(): LNode {
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

function show(head: LNode) {
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

function reverse(head: LNode) {
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
}

function main() {
    const head = init();
    console.log("Before reverse:");
    show(head);

    reverse(head);
    console.log("After reverse:");
    show(head);
}

main();

