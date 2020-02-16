import { nearReverse } from "../near_reverse";
import { init } from "../../lib";

describe("near Reverse", () => {
  describe("empty chain", () => {
    it("should return the origin chain", () => {
      const head = init([]);
      const res = nearReverse(head);

      expect(res).toEqual(head);
      expect(res.next).toBeNull();
    });
  });

  describe("normal chain", () => {
    it("should return as expected", () => {
      const head = nearReverse(init([1, 2, 3, 4, 5, 6, 7]));
      expect(head).toMatchSnapshot();
    });
  });
});
