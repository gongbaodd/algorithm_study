import { init } from "../lib";
import { flatten } from "../fatten";

describe("flatten", () => {
  it("should return [3,6,8,11,15,21,22,30,31,39,40,45,50]", () => {
    const head = flatten(init());
    expect(head).toMatchSnapshot();
  });
});
