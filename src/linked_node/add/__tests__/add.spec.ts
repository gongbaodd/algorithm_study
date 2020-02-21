import { add } from "../add.0";
import { init } from "../../lib";

const LNODES_1 = [3, 4, 5, 6, 7, 8];
const LNODES_2 = [9, 8, 7, 6, 5];

describe("add tow linked lists", () => {
  it("should return [2, 3, 3, 3, 3, 9]", () => {
    const head = add(init(LNODES_1), init(LNODES_2));
    expect(head?.next?.data).toEqual(2);
    expect(head).toEqual(init([2, 3, 3, 3, 3, 9]));
    expect(head).toMatchSnapshot();
  });
});
