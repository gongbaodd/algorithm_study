import { Stack } from "./lib";

export function isPopSerial(push: number[], pop: number[]): boolean {
  if (push.length !== pop.length) {
    return false;
  }

  const stack = new Stack<number>();

  let pushIndex = 0;
  let popIndex = 0;

  for (; pushIndex < push.length; pushIndex += 1) {
    stack.push(push[pushIndex]);

    for (;;) {
      if (pop[popIndex] === stack.top()) {
        stack.pop();
        popIndex += 1;
      } else {
        break;
      }

      if (stack.isEmpty()) {
        break;
      }
    }
  }

  return stack.isEmpty() && pushIndex === popIndex;
}
