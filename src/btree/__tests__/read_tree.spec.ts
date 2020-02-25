import { readTree } from "../read_tree";
import { toTree } from "../serial_numbers";
import { BTree } from "../lib";

describe("ReadTree", () => {
  describe("input [1,2,3,4,5,6,7,8,9,10]", () => {
    it("should return [6,3,9,2,5,8,10,14,7]", () => {
      const root = toTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9);
      const arr = readTree(root as BTree<number>);

      expect(arr).toEqual([5, 2, 8, 1, 3, 6, 9, 4, 7, 10]);
    });
  });
});
