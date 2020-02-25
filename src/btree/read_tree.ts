import { BTree } from "./lib";
import { Queue } from "../queue/lib";

export function readTree(root: BTree<number>) {
  const arr: number[] = [];
  const queue = new Queue<BTree<number>>();

  queue.enQueue(root);

  while (!queue.isEmpty()) {
    const tree = queue.top;
    if (tree) {
      queue.deQueue();
      arr.push(tree.data as number);

      if (tree.lChild !== null) {
        queue.enQueue(tree.lChild);
      }

      if (tree.rChild !== null) {
        queue.enQueue(tree.rChild);
      }
    }
  }

  return arr;
}
