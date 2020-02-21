import { deduplicate as dedup0 } from "../deduplicate.0";
import { deduplicate as dedup1 } from "../deduplicate.1";
import { init } from "../../lib";

const INIT_DATA = [1, 3, 1, 4, 5, 5, 7];

describe("deduplicate", () => {
  it("should deduplicate nodes", () => {
    const head0 = init(INIT_DATA);
    const head1 = init(INIT_DATA);

    const result = init([1, 3, 4, 5, 7]);
    expect(dedup0(head0)).toEqual(result);
    expect(dedup1(head1)).toEqual(result);
  });
});
