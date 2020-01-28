/* eslint-disable no-param-reassign */

import { sortFunc } from '../types';

export const insertSort: sortFunc = (arr, leftIndex, rightIndex) => {
  for (let i = leftIndex + 1; i <= rightIndex; i++) {
    const target = arr[i];
    let pos = i - 1;

    while (arr[pos] > target && pos >= 0) {
      arr[pos + 1] = arr[pos];
      pos--;
    }

    arr[pos + 1] = target;
  }
};
