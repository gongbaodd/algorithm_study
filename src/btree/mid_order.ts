import { BTree } from "./lib";

function midorder(arr: number[], root: BTree<number> | null) {
  if (root === null) {
    return;
  }

  if (!root.lChild !== null) {
    midorder(arr, root.lChild);
  }

  arr.push(root.data as number);

  if (root.rChild !== null) {
    midorder(arr, root.rChild);
  }
}

export function midOrderToArr(root: BTree<number>) {
  const arr: number[] = [];

  midorder(arr, root);

  return arr;
}
