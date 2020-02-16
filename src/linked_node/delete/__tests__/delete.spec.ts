import { init } from "../../lib";
import { del } from "../delete";

describe("delete", () => {
  describe("[1,2,3] delete number 5", () => {
    it("should return [1,2,3]", () => {
      expect(del(init([1, 2, 3]), 5)).toMatchSnapshot();
    });
  });

  describe("[1,2,3] delete number 2", () => {
    it("should return [1,3]", () => {
      expect(del(init([1, 2, 3]), 2)).toMatchSnapshot();
    });
  });

  describe("[] delete number 2", () => {
    it("should return []", () => {
      expect(del(init([]), 2)).toMatchSnapshot();
    });
  });
});
