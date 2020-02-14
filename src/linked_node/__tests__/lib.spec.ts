import { LNode } from "../lib";

describe('LNode library', () => {
    describe("LNode", () => {
        it('should generate LNode object', () => {
            let node = new LNode(0);

            expect(node.data).toEqual(0);
            expect(node.next).toBeNull();
        });
    });

});