export class LNode<T = number> {
  data: T | null;

  next: LNode<T> | null = null;

  constructor(data: T | null = null, next: LNode<T> | null = null) {
    this.data = data;
    this.next = next ?? this.next;
  }
}

export function info(text: string, newLine = true) {
  process.stdout.write(text);
  if (newLine) {
    process.stdout.write("\n");
  }
}

export function show(head: LNode) {
  if (head.next == null) {
    return;
  }

  let cur = head;
  while (cur.next !== null) {
    cur = cur.next;
    info(`${cur.data} `, false);
  }
  info("");
}

export function result(initFn: () => LNode, fn: (node: LNode) => LNode) {
  const head = initFn();
  info("Before:");
  show(head);

  const newHead = fn(head);
  info("After:");
  show(newHead);
}

export function init(INIT_DATA: number[]): LNode {
  const head = new LNode(0);
  let curr = head;

  INIT_DATA.forEach((index) => {
    curr.next = new LNode(index);
    curr = curr.next;
  });

  return head;
}
