import { isEqual } from "../isEqual";
import { BTree } from "../lib";
import { toTree } from "../serial_numbers";

describe("isEqual", () => {
  describe("a,b trees are null", () => {
    it("should return true", () => {
      expect(isEqual(null, null)).toBe(true);
    });
  });

  describe("a tree is null, b tree is valued", () => {
    it("should return false", () => {
      expect(isEqual(null, new BTree())).toBe(false);
    });
  });

  describe("b tree is null, a tree is valued", () => {
    it("should return false", () => {
      expect(isEqual(new BTree(), null)).toBe(false);
    });
  });

  describe("a,b trees are not null", () => {
    describe("a==b", () => {
      it("should return true", () => {
        expect(isEqual(toTree([1, 2, 3], 0, 2), toTree([1, 2, 3], 0, 2))).toBe(
          true
        );
      });
    });

    describe("a!==b", () => {
      it("should return false", () => {
        expect(isEqual(toTree([1, 2, 3], 0, 2), toTree([4, 5, 6], 0, 2))).toBe(
          false
        );
      });
    });
  });
});
