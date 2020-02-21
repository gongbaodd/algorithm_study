import { Stack } from "./lib";

export class O1minStack extends Stack<number> {
  minStack = new Stack<number>();

  push(e: number) {
    if (this.minStack.isEmpty()) {
      this.minStack.push(e);
    }
    if (e < (this.minStack.top() as number)) {
      this.minStack.push(e);
    }
    return super.push(e);
  }

  pop(): number | null {
    const data = super.pop();

    if (data === this.minStack.top()) {
      this.minStack.pop();
    }

    return data;
  }

  min(): number | null {
    return this.minStack.top();
  }
}
