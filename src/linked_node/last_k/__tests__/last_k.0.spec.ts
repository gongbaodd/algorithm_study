import { lastK } from "../last_k.0";
import { init } from "../../lib";

describe("lastK", () => {
  describe("empty chain", () => {
    it("should return null", () => {
      const head = init([]);
      const result = lastK(head, 1);
      expect(result).toBeNull();
    });
  });

  describe("normal chain", () => {
    it("should return 5", () => {
      const head = init([1, 2, 3, 4, 5, 6, 7]);
      const result = lastK(head, 3);
      expect(result).toEqual(5);
    });
  });
});
