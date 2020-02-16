import { nearkReverse } from "../near_k_reverse";
import { init } from "../../lib";

describe("near k reverse", () => {
  describe("k === 2", () => {
    it("should return 2,1,4,3,6,5,7", () => {
      expect(nearkReverse(init([1, 2, 3, 4, 5, 6, 7]), 2)).toMatchSnapshot();
    });
  });

  describe("k === 3", () => {
    it("should return 3,2,1,6,5,4,7", () => {
      expect(nearkReverse(init([1, 2, 3, 4, 5, 6, 7]), 3)).toMatchSnapshot();
    });
  });
});
