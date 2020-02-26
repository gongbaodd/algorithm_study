// 二元查找树，左节点<root<右节点
export function isAfterOrder(
  arr: number[],
  start: number,
  end: number
): boolean {
  const root = arr[end];
  let i = start;
  let j;

  while (i < end) {
    if (arr[i] > root) {
      break;
    }
    i += 1;
  }

  j = i;
  while (j < end) {
    if (arr[j] < root) {
      return false;
    }
    j += 1;
  }

  let leftIsAfterOrder = true;
  let rightIsAfterOrder = true;

  if (i > start) {
    leftIsAfterOrder = isAfterOrder(arr, start, i - 1);
  }

  if (j < end) {
    rightIsAfterOrder = isAfterOrder(arr, i, end);
  }

  return leftIsAfterOrder && rightIsAfterOrder;
}
