import { Queue } from "../queue/lib";

export class LRU<T> {
  private hashSet = new Set<T>();

  private queue: Queue<T> = new Queue();

  private length = 0;

  private get isQueueFull() {
    return this.queue.size() >= this.length;
  }

  private enqueue(data: T) {
    if (this.isQueueFull) {
      this.hashSet.delete(this.queue.top as T);
      this.queue.deQueue();
    }

    this.queue.enQueue(data);
    this.hashSet.add(data);
  }

  constructor(length = 0) {
    this.length = length;
  }

  accessData(data: T) {
    if (this.hashSet.has(data)) {
      this.queue.remove(data);
      this.queue.enQueue(data);

      return;
    }

    this.enqueue(data);
  }

  get cache() {
    return this.hashSet;
  }
}
