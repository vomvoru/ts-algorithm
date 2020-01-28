import { getShuffleList } from './getShuffleList';
import { sortFunc } from '../../sort/types';

export const ruSortTest = (name: string, sort: sortFunc) => {
  describe(name, () => {
    test('정렬 검사', () => {
      const list = getShuffleList(5000, 1, 1000);
      const sortedListA = [...list].sort((a, b) => a - b);
      const sortedListB = [...list];

      sort(sortedListB, 0, sortedListB.length - 1);

      expect(sortedListA).toEqual(sortedListB);
    });

    test('정렬된 배열 정렬 검사', () => {
      const list = getShuffleList(5000, 1, 1000);
      list.sort((a, b) => a - b);
      const sortedListA = [...list].sort((a, b) => a - b);
      const sortedListB = [...list];

      sort(sortedListB, 0, sortedListB.length - 1);

      expect(sortedListA).toEqual(sortedListB);
    });

    test('역정렬된 배열 정렬 검사', () => {
      const list = getShuffleList(5000, 1, 1000);
      list.sort((a, b) => b - a);
      const sortedListA = [...list].sort((a, b) => a - b);
      const sortedListB = [...list];

      sort(sortedListB, 0, sortedListB.length - 1);

      expect(sortedListA).toEqual(sortedListB);
    });
  });
};
