process.stdout.write = jest.fn();

import { LNode, show, init } from "../lib";

describe("LNode Library", () => {
  describe("show()", () => {
    describe("empty chain", () => {
      it("should not call info()", () => {
        const head = new LNode(0);
        show(head);
        expect(process.stdout.write).not.toBeCalled();
      });
    });

    describe("chain with data", () => {
      it("should call info()", () => {
        const head = init([1, 2, 3]);
        show(head);
        expect(process.stdout.write).toBeCalledTimes(5);
        expect(process.stdout.write).toBeCalledWith("1 ");
        expect(process.stdout.write).toBeCalledWith("2 ");
        expect(process.stdout.write).toBeCalledWith("3 ");
        expect(process.stdout.write).toBeCalledWith("");
        expect(process.stdout.write).toBeCalledWith("\n");
      });
    });
  });
});
