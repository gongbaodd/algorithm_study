import { init } from "../../lib";
import { rearrage } from "../rearrange.0";

describe("Rearrange", () => {
  describe("empty chain", () => {
    it("should return empty chain", () => {
      const head = init([]);
      const newHead = rearrage(head);
      expect(newHead).toMatchSnapshot();
    });
  });

  describe("The length of the chain is odd", () => {
    it("should return as expected", () => {
      const head = init([1, 2, 3, 4, 5, 6, 7]);
      const newHead = rearrage(head);
      expect(newHead).toMatchSnapshot();
    });
  });

  describe("The length of the chain is even", () => {
    it("should return as expected", () => {
      const head = init([1, 2, 3, 4, 5, 6, 7, 8]);
      const newHead = rearrage(head);
      expect(newHead).toMatchSnapshot();
    });
  });
});
