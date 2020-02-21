import { Queue } from "../simulateQueue";

describe("simulate queue", () => {
  describe("empty queue", () => {
    it("should return top ==== null", () => {
      expect(new Queue().head).toBeNull();
    });

    it("should return tail ==== null", () => {
      expect(new Queue().tail).toBeNull();
    });

    it("should return size() ==== 0", () => {
      expect(new Queue().size()).toBe(0);
    });
  });

  describe("queue with data [1,2,3,4]", () => {
    it("queue function", () => {
      const q = new Queue<number>();
      q.enqueue(1);
      expect(q.tail).toBe(1);
      expect(q.head).toBe(1);
      expect(q.size()).toBe(1);

      q.enqueue(2);
      expect(q).toMatchSnapshot();
      expect(q.head).toBe(1);
      expect(q.tail).toBe(2);
      expect(q.size()).toBe(2);

      q.dequeue();
      expect(q.tail).toBe(2);
      expect(q.head).toBe(2);
      expect(q.size()).toBe(1);

      q.enqueue(3);
      expect(q.tail).toBe(3);
      expect(q.head).toBe(2);
      expect(q.size()).toBe(2);

      q.enqueue(4);
      expect(q.tail).toBe(4);
      expect(q.head).toBe(2);
      expect(q.size()).toBe(3);

      q.dequeue();
      expect(q.tail).toBe(4);
      expect(q.head).toBe(3);
      expect(q.size()).toBe(2);
    });
  });
});
