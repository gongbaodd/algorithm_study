import { info } from "../lib";

process.stdout.write = jest.fn();

describe("LNode library", () => {
  describe("info", () => {
    it("should call process.stdout.write once", () => {
      info("test", false);
      expect(process.stdout.write).toBeCalledTimes(1);
      expect(process.stdout.write).toBeCalledWith("test");
    });
  });
});
