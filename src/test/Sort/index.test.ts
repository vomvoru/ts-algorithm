import { getShuffleList } from './getShuffleList';
import { quickSort } from '../../QuickSort/index';

describe('정렬 검사', () => {
  const list = getShuffleList(10000, 1, 1000);
  const sortedListA = [...list].sort((a, b) => a - b);

  test('useMidPivot', () => {
    const sortedListB = [...list];

    quickSort(sortedListB, 0, sortedListB.length - 1);

    expect(sortedListA).toEqual(sortedListB);
  });

  test('not useMidPivot', () => {
    const sortedListB = [...list];

    quickSort(sortedListB, 0, sortedListB.length - 1, false);

    expect(sortedListA).toEqual(sortedListB);
  });
});

describe('정렬된 배열 정렬 검사', () => {
  const list = getShuffleList(10000, 1, 1000);
  list.sort((a, b) => a - b);
  const sortedListA = [...list].sort((a, b) => a - b);

  test('useMidPivot', () => {
    const sortedListB = [...list];

    quickSort(sortedListB, 0, sortedListB.length - 1);

    expect(sortedListA).toEqual(sortedListB);
  });

  test('not useMidPivot', () => {
    const sortedListB = [...list];

    quickSort(sortedListB, 0, sortedListB.length - 1, false);

    expect(sortedListA).toEqual(sortedListB);
  });
});

describe('역정렬된 배열 정렬 검사', () => {
  const list = getShuffleList(10000, 1, 1000);
  list.sort((a, b) => b - a);
  const sortedListA = [...list].sort((a, b) => a - b);

  test('useMidPivot', () => {
    const sortedListB = [...list];

    quickSort(sortedListB, 0, sortedListB.length - 1);

    expect(sortedListA).toEqual(sortedListB);
  });

  test('not useMidPivot', () => {
    const sortedListB = [...list];

    quickSort(sortedListB, 0, sortedListB.length - 1, false);

    expect(sortedListA).toEqual(sortedListB);
  });
});
