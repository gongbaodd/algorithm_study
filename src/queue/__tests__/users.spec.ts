import { UserQueue } from "../users";

describe("A user queue system", () => {
  describe("add three users", () => {
    it("should give the index", () => {
      const queue = new UserQueue();

      queue.enQueue({ name: "a", index: 0, id: 1 });
      queue.enQueue({ name: "b", index: 0, id: 2 });
      queue.enQueue({ name: "c", index: 0, id: 3 });

      expect(queue.size()).toEqual(3);
      expect(queue).toMatchSnapshot();

      queue.deQueue();

      expect(queue.size()).toEqual(2);
      expect(queue).toMatchSnapshot();
    });
  });
});
