export class BTree<T> {
  data: T | null = null;

  lChild: BTree<T> | null = null;

  rChild: BTree<T> | null = null;
}
