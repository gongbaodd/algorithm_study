import { result, init as mockInit } from "../lib";

describe("LNode Library", () => {
  describe("result()", () => {
    it("should call init() & reverse() once", () => {
      const init = jest.fn(() => mockInit([]));
      const reverse = jest.fn(() => mockInit([]));
      result(init, reverse);

      expect(init).toBeCalledTimes(1);
      expect(reverse).toBeCalledTimes(1);
    });
  });
});
