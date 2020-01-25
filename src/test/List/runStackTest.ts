import { IStack } from '../../List/IStack';

export const runStackTest = (name: string, Stack: new () => IStack<string>) => {
  describe(name, () => {
    test('push, pop 테스트', () => {
      const stack = new Stack();

      stack.push('hello');
      stack.push('world');

      expect(stack.count()).toBe(2);

      expect(stack.pop()).toBe('world');
      expect(stack.pop()).toBe('hello');
      expect(stack.pop()).toBe(null);

      expect(stack.count()).toBe(0);
    });
  });
};
