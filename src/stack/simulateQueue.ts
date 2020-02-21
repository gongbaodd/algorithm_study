import { Stack } from "./lib";

export class Queue<T> {
  a = new Stack<T>();

  b = new Stack<T>();

  private allToB() {
    while (!this.a.isEmpty()) {
      this.b.push(this.a.pop() as T);
    }
  }

  private allToA() {
    while (!this.b.isEmpty()) {
      this.a.push(this.b.pop() as T);
    }
  }

  enqueue(data: T) {
    this.allToA();
    this.a.push(data);
  }

  dequeue() {
    this.allToB();
    this.b.pop();
    this.allToA();
  }

  size() {
    return this.a.size() + this.b.size();
  }

  get tail() {
    this.allToA();
    return this.a.top();
  }

  get head() {
    this.allToB();
    return this.b.top();
  }
}
