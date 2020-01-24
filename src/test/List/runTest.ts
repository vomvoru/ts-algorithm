import { IList } from '../../List/IList';

export const runTest = (List: new () => IList<string>) => {
  describe('insert method', () => {
    test('insert후 first, next, count methods 테스트', () => {
      const list = new List();

      list.insert('hello');
      list.insert('world');

      expect(list.first()).toBe('hello');

      expect(list.first()).toBe('hello');
      expect(list.next()).toBe('world');
      expect(list.next()).toBe(null);

      expect(list.count()).toBe(2);
    });

    test('insert후 remove method 테스트', () => {
      const list = new List();

      list.insert('hello');
      list.insert('world');

      list.first();
      list.remove();

      expect(list.first()).toBe('world');
      expect(list.next()).toBe(null);

      expect(list.count()).toBe(1);
    });
  });

  describe('first method', () => {
    test('생성후 first 출력은 null 이다.', () => {
      const list = new List();

      expect(list.first()).toBe(null);
    });
  });

  describe('next method', () => {
    test('생성후 next 출력은 null 이다.', () => {
      const list = new List();

      expect(list.next()).toBe(null);
    });
  });

  describe('remove method', () => {
    test('생성후 remove 출력은 null 이다.', () => {
      const list = new List();

      expect(list.remove()).toBe(null);
    });
  });

  describe('count method', () => {
    test('생성후 count 출력은 0 이다.', () => {
      const list = new List();

      expect(list.count()).toBe(0);
    });
  });
};
