import { IQueue } from '../../List/IQueue';

export const runQueueTest = (name: string, Queue: new () => IQueue<string>) => {
  describe(name, () => {
    test('enqueue, dequque 테스트', () => {
      const queue = new Queue();

      queue.enqueue('hello');
      queue.enqueue('world');

      expect(queue.count()).toBe(2);

      expect(queue.dequque()).toBe('hello');
      expect(queue.dequque()).toBe('world');
      expect(queue.dequque()).toBe(null);

      expect(queue.count()).toBe(0);
    });
  });
};
