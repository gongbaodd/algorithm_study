import { Queue } from "../lib";

describe("Queue", () => {
  it("should create a queue", () => {
    const queue = new Queue<number>();

    expect(queue).toMatchSnapshot();

    expect(queue.top).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue.isEmpty()).toEqual(true);
    expect(queue.size()).toEqual(0);

    queue.enQueue(233);
    expect(queue.top).toEqual(233);
    expect(queue.back).toEqual(233);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.size()).toEqual(1);

    queue.deQueue();
    expect(queue.top).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue.isEmpty()).toEqual(true);
    expect(queue.size()).toEqual(0);
  });
});
