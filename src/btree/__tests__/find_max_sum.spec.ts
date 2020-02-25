import { BTree } from "../lib";
import { find } from "../find_max_subree";

function constructTree(): BTree<number> {
  const root = new BTree<number>();
  const node1 = new BTree<number>();
  const node2 = new BTree<number>();
  const node3 = new BTree<number>();
  const node4 = new BTree<number>();

  root.data = 6;
  node1.data = 3;
  node2.data = -7;
  node3.data = -1;
  node4.data = 9;

  root.lChild = node1;
  root.rChild = node2;

  node1.lChild = node3;
  node1.rChild = node4;

  return root;
}

describe("find max subtree sum", () => {
  it("should get sum=11, root.data=3", () => {
    expect(find(constructTree())).toEqual({ sum: 11, root: 3 });
  });
});
