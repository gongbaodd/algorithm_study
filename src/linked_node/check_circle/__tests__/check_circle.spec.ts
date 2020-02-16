import { findMeet, makeLoop, findEntrance } from "../check_circle";
import { init, LNode } from "../../lib";

describe("check_circles", () => {
  describe("findMeet", () => {
    describe("normal chain", () => {
      it("should return null", () => {
        const head = init([1, 2, 3, 4, 5]);
        expect(findMeet(head)).toBeNull();
      });
    });

    describe("the chain has loop", () => {
      it("should return the meet point", () => {
        const head = makeLoop();
        expect(findMeet(head)).toMatchSnapshot();
      });
    });
  });

  describe("findEntrance", () => {
    it("should return rntrance node", () => {
      const head = makeLoop();
      const meet = findMeet(head) as LNode;

      expect(findEntrance(head, meet)).toMatchSnapshot();
    });
  });
});
