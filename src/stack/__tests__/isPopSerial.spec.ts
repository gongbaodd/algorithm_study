import { isPopSerial } from "../isPopSerial";

describe("isPopSerial", () => {
  describe("the push serial dose not have same length of the pop serial", () => {
    it("should return false", () => {
      expect(isPopSerial([], [1, 2, 3])).toBe(false);
    });
  });

  describe("the push serial is [1,2,3,4,5]", () => {
    describe("the pop serial is [3,2,5,4,1]", () => {
      it("should return true", () => {
        expect(isPopSerial([1, 2, 3, 4, 5], [3, 2, 5, 4, 1])).toBe(true);
      });
    });

    describe("the pop serial is [5,3,4,1,2]", () => {
      it("should return false", () => {
        expect(isPopSerial([1, 2, 3, 4, 5], [5, 3, 4, 1, 2])).toBe(false);
      });
    });
  });
});
