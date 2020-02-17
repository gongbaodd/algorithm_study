export class LNode {
  data: number;

  right: LNode | null = null;

  down: LNode | null = null;

  constructor(data = 0) {
    this.data = data;
  }
}

function extend(
  head: LNode,
  datas: number[],
  direction: Exclude<keyof LNode, "data">
): LNode {
  let current = head;
  datas.forEach(data => {
    current[direction] = new LNode(data);
    current = current[direction] as LNode;
  });
  return head;
}

export function init(): LNode {
  const head = new LNode(3);
  extend(head, [11, 15, 30], "right");

  let cursor: LNode | null = head;
  const datas = [[6, 8, 31], [21], [22, 50], [39, 40, 55]];
  let count = 0;
  while (cursor) {
    extend(cursor, datas[count], "down");
    cursor = cursor.right;
    count += 1;
  }

  return head;
}
