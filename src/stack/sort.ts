import { Stack } from "./lib";

function moveGreaterBottomToTop(s: Stack<number>) {
  if (s.isEmpty()) {
    return;
  }

  const top1 = s.pop() as number;
  if (s.isEmpty()) {
    s.push(top1);
    return;
  }

  moveGreaterBottomToTop(s);
  const top2 = s.pop() as number;
  if (top1 < top2) {
    s.push(top1);
    s.push(top2);
  } else {
    s.push(top2);
    s.push(top1);
  }
}

export function sortStack(s: Stack<number>) {
  if (s.isEmpty()) {
    return;
  }

  moveGreaterBottomToTop(s);

  const top = s.pop() as number;
  sortStack(s);
  s.push(top);
}
