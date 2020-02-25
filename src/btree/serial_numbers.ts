import { BTree } from "./lib";

export function toTree(
  arr: number[],
  start: number,
  end: number
): BTree<number> | null {
  let root: BTree<number> | null = new BTree<number>();

  if (end < start) {
    root = null;
    return root;
  }

  const mid = parseInt(((start + end) / 2).toString(), 10);

  root.data = arr[mid];

  root.lChild = toTree(arr, start, mid - 1);
  root.rChild = toTree(arr, mid + 1, end);

  return root;
}
