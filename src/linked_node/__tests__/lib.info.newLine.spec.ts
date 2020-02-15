import { info } from "../lib";

process.stdout.write = jest.fn();

describe("LNode library", () => {
  describe("info", () => {
    it("should call process.stdout.write twice", () => {
      info("test");
      expect(process.stdout.write).toBeCalledTimes(2);
      expect(process.stdout.write).toBeCalledWith("test");
      expect(process.stdout.write).toBeCalledWith("\n");
    });
  });
});
