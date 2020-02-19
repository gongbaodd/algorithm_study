import { reverse } from "../reverse";
import { Stack } from "../lib";

describe("reverse", () => {
  describe("stack is empty", () => {
    it("should do nothing", () => {
      const s = Stack.from([]);
      reverse(s);

      expect(s.isEmpty()).toBe(true);
    });
  });

  describe("stack is not empty", () => {
    it("should reverse the stack", () => {
      const s = Stack.from([1, 2, 3, 4, 5]);
      reverse(s);

      expect(s.top()).toEqual(1);
      expect(s).toMatchSnapshot();
    });
  });
});
