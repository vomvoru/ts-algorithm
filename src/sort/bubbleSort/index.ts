import { sortFunc } from '../types';
import { swap } from '../util';

export const bubbleSort: sortFunc = (arr, leftIndex, rightIndex) => {
  for (let i = leftIndex; i <= rightIndex; i++) {
    for (let j = i; j <= rightIndex; j++) {
      if (arr[i] > arr[j]) swap(arr, i, j);
    }
  }
};
