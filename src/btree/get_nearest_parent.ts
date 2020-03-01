import { BTree } from "./lib";
import { Stack } from "../stack/lib";

function getPathFromRoot<T>(
  root: BTree<T> | null,
  node: typeof root,
  stack: Stack<typeof root>
): boolean {
  if (root === null) {
    return false;
  }

  if (node === root) {
    stack.push(root);
    return true;
  }

  if (
    getPathFromRoot(root.lChild, node, stack) ||
    getPathFromRoot(root.rChild, node, stack)
  ) {
    stack.push(root);
    return true;
  }

  return false;
}

export function findParentNode<T>(
  root: BTree<T> | null,
  node1: typeof root,
  node2: typeof root
): typeof root {
  const stack1 = new Stack<typeof root>();
  const stack2 = new Stack<typeof root>();

  getPathFromRoot(root, node1, stack1);
  getPathFromRoot(root, node2, stack2);

  let parent: typeof root = null;

  while (stack1.top() === stack2.top()) {
    parent = stack1.top();
    stack1.pop();
    stack2.pop();
  }

  return parent;
}
