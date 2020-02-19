import { Stack } from "./lib";

function moveBottomToTop(s: Stack<number>) {
  if (s.isEmpty()) {
    return;
  }

  const top1 = s.pop() as number;

  if (s.isEmpty()) {
    s.push(top1);
  } else {
    moveBottomToTop(s);
    const top2 = s.pop() as number;
    s.push(top1);
    s.push(top2);
  }
}

export function reverse(s: Stack<number>) {
  if (s.isEmpty()) {
    return;
  }
  moveBottomToTop(s);
  const top = s.pop() as number;
  reverse(s);
  s.push(top);
}
