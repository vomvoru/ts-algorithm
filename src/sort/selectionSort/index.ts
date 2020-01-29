/* eslint-disable no-param-reassign */

import { sortFunc } from '../types';
import { swap } from '../util';

export const selectionSort: sortFunc = (arr, leftIndex, rightIndex) => {
  for (let i = leftIndex; i <= rightIndex - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j <= rightIndex; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }

    swap(arr, i, minIndex);
  }
};
