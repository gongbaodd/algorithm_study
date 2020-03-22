import { toTree } from "../serial_numbers";
import { midOrderToArr } from "../mid_order";
import { BTree } from "../lib";

describe("BTree", () => {
  describe("input [1,2,3,4,5,6,7,8,9,10]", () => {
    it("should return [1,2,3,4,5,6,7,8,9,10] in mid order", () => {
      const root = toTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9);

      expect(midOrderToArr(root as BTree<number>)).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
      ]);
      expect(root).toMatchSnapshot();
    });
  });
});
