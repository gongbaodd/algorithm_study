import { BTree } from "./lib";

export function find(tree: BTree<number>) {
  let maxSum = -Infinity;
  const maxSumRoot = new BTree<number>();

  function findMaxSubTreeSum(
    root: BTree<number> | null,
    _maxRoot: BTree<number>
  ): number {
    if (root === null) {
      return 0;
    }

    const maxRoot = _maxRoot;
    const lMax = findMaxSubTreeSum(root.lChild, maxRoot);
    const rMax = findMaxSubTreeSum(root.rChild, maxRoot);
    const sum = lMax + rMax + (root.data ?? 0);

    if (sum > maxSum) {
      maxSum = sum;
      maxRoot.data = root.data;
    }

    return sum;
  }

  findMaxSubTreeSum(tree, maxSumRoot);

  return {
    sum: maxSum,
    root: maxSumRoot.data,
  };
}
