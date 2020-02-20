import { sortStack } from "../sort";
import { Stack } from "../lib";

describe("sort stack", () => {
  describe("provide an empty stack", () => {
    it("should do nothing", () => {
      const s = Stack.from([]);
      sortStack(s);

      expect(s.isEmpty()).toBe(true);
      expect(s).toMatchSnapshot();
    });
  });

  describe("provide a stack [2, 1, 4, 1, 5]", () => {
    it("should return 5,4,2,1,1", () => {
      const s = Stack.from([2, 1, 4, 1, 5]);
      sortStack(s);

      expect(s.isEmpty()).toBe(false);
      expect(s).toMatchSnapshot();
    });
  });
});
