import { BTree } from "../btree/lib";

export function isEqual<T>(
  _roota: BTree<T> | null,
  _rootb: BTree<T> | null
): boolean {
  if (_roota === null && _rootb === null) {
    return true;
  }

  if (_roota === null && _rootb !== null) {
    return false;
  }

  if (_roota !== null && _rootb === null) {
    return false;
  }

  {
    const roota = _roota as BTree<T>;
    const rootb = _rootb as BTree<T>;

    if (roota.data === rootb.data) {
      return (
        isEqual(roota.lChild, rootb.lChild) &&
        isEqual(roota.rChild, rootb.rChild)
      );
    }
  }

  return false;
}
