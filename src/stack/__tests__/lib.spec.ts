import { Stack } from '../lib';

describe('Stack', () => {
    it('should work as a stack', () => {
        const stack = new Stack();

        expect(stack).toMatchSnapshot();
        expect(stack.isEmpty()).toEqual(true);
        expect(stack.size()).toEqual(0);

        stack.push(50);
        expect(stack).toMatchSnapshot();
        expect(stack.isEmpty()).toEqual(false);
        expect(stack.size()).toEqual(1);

        expect(stack.top()).toEqual(50);
        expect(stack).toMatchSnapshot();

    })
})