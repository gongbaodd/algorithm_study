import { reversefn as r0 } from "../reverse.0"; // normal
import { reversefn as r1 } from "../reverse.1"; // inverse functions
import { reverseFn as r2 } from "../reverse.2"; // insert
import { reverseFn as r3 } from "../reverse.3";
import { init } from "../../lib";

describe("reverse", () => {
  describe("empty chain", () => {
    it("should return origin chain", () => {
      const head = init([]);
      expect(r0(head)).toMatchObject(head);
      expect(r1(head)).toMatchObject(head);
      expect(r2(head)).toMatchObject(head);
      expect(r3(head)).toMatchObject(head);
    });
  });
  describe("normal chain", () => {
    it("should reverse chain", () => {
      expect(r0(init([1, 2, 3, 4, 5, 6, 7]))).toMatchSnapshot("normal");
      expect(r1(init([1, 2, 3, 4, 5, 6, 7]))).toMatchSnapshot(
        "inverse function"
      );
      expect(r2(init([1, 2, 3, 4, 5, 6, 7]))).toMatchSnapshot("insert");
      expect(r3(init([1, 2, 3, 4, 5, 6, 7]))).toMatchSnapshot("hash set");
    });
  });
});
