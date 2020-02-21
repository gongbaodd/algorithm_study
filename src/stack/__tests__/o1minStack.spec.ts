import { O1minStack } from "../o1minStack";

describe("O(1) get minimal value in stack", () => {
  describe("the stack is empty", () => {
    it("should return null", () => {
      const s = new O1minStack();
      expect(s.min()).toBeNull();
    });
  });

  describe("the stack is pushed data", () => {
    it("should output 5", () => {
      const s = new O1minStack();
      s.push(5);
      expect(s.min()).toBe(5);
    });

    it("should output 1", () => {
      const s = new O1minStack();
      s.push(5);
      s.push(1);
      s.push(4);

      expect(s.min()).toBe(1);
    });
  });

  describe("the stack pops data", () => {
    it("should output 5", () => {
      const s = new O1minStack();
      s.push(5);
      s.pop();
      expect(s.min()).toBeNull();
    });

    it("should output 1", () => {
      const s = new O1minStack();
      s.push(5);
      s.push(1);
      s.push(4);
      s.pop();

      expect(s.min()).toBe(1);
    });
  });
});
