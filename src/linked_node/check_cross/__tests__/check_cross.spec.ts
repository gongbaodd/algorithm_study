import { findCross, findTailAndLen } from "../check_cross";
import { init } from "../../lib";

describe("find cross", () => {
  describe("chain1 is longer than chain2", () => {
    it("should return the cross node", () => {
      const head1 = init([1, 2, 3, 4, 5, 6]);
      const head2 = init([1, 2, 3, 4]);
      const head3 = init([5, 6, 7]);

      findTailAndLen(head1)[0].next = head3;
      findTailAndLen(head2)[0].next = head3;

      expect(findCross(head1, head2)).toMatchSnapshot("1>2");
    });
  });

  describe("chain2 is longer than chain1", () => {
    it("should return the cross node", () => {
      const head1 = init([1, 2, 3]);
      const head2 = init([1, 2, 3, 4]);
      const head3 = init([5, 6, 7]);

      findTailAndLen(head1)[0].next = head3;
      findTailAndLen(head2)[0].next = head3;

      expect(findCross(head1, head2)).toMatchSnapshot("2>1");
    });
  });

  describe("no cross", () => {
    it("should return null", () => {
      const head1 = init([1, 2, 3]);
      const head2 = init([1, 2, 3, 4]);
      expect(findCross(head1, head2)).toBeNull();
    });
  });
});
