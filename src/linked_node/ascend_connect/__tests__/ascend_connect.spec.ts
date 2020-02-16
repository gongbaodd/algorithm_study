import { ascendConnect } from "../ascend_connect";
import { init } from "../../lib";

describe("ascend connect", () => {
  describe("chain1 is longer than chain2", () => {
    describe("chain1 = [5, 3, 1], chain2 = [4, 2]", () => {
      it("should return [5, 4, 3, 2, 1]", () => {
        expect(ascendConnect(init([5, 3, 1]), init([4, 2]))).toMatchSnapshot();
      });
    });

    describe("chain1 = [5, 3, 1], chain2 = [6, 2]", () => {
      it("should return [6, 5, 3, 2, 1]", () => {
        expect(ascendConnect(init([5, 3, 1]), init([6, 2]))).toMatchSnapshot();
      });
    });
  });

  describe("chain1 is shorter than chain2", () => {
    describe("chain1 = [5, 1], chain2 = [6, 4, 2]", () => {
      it("should return [6, 5, 4, 2, 1]", () => {
        expect(ascendConnect(init([5, 1]), init([6, 4, 2]))).toMatchSnapshot();
      });
    });

    describe("chain1 = [3, 1], chain2 = [6, 4, 2]", () => {
      it("should return [6, 4, 3, 2, 1]", () => {
        expect(ascendConnect(init([3, 1]), init([6, 4, 2]))).toMatchSnapshot();
      });
    });
  });
});
