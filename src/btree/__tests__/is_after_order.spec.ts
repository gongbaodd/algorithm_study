import { isAfterOrder } from "../is_after_order";

describe("isAfterOrder", () => {
  describe("input 1,3,2,5,7,6,4", () => {
    it("should return true", () => {
      expect(isAfterOrder([1, 3, 2, 5, 7, 6, 4], 0, 7)).toBe(true);
    });
  });

  describe("input 1,2,3,5,7,6,4", () => {
    it("should return false", () => {
      expect(isAfterOrder([1, 2, 3, 5, 7, 6, 4], 0, 7)).toBe(true);
    });
  });
});
