import { findParentNode } from "../get_nearest_parent";
import { toTree } from "../serial_numbers";

describe("find nearest  parent", () => {
  it("should find the parent", () => {
    const root = toTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9);

    const node1 = root?.lChild?.lChild ?? null;
    const node2 = root?.lChild?.rChild ?? null;

    const parent = findParentNode(root, node1, node2);

    expect(parent?.data).toBe(2);
    expect(parent).toMatchSnapshot();
  });
});
