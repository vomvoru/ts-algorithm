/* eslint-disable no-param-reassign */

import { sortFunc } from '../types';

export const mergeSort: sortFunc = (arr, leftIndex, rightIndex) => {
  divide(arr, leftIndex, rightIndex);
};

const divide = (arr: number[], leftStartIndex: number, rightEndIndex: number) => {
  if (leftStartIndex >= rightEndIndex) return;

  const leftEndIndex = leftStartIndex + Math.floor((rightEndIndex - leftStartIndex) / 2);
  const rightStartIndex = leftEndIndex + 1;

  divide(arr, leftStartIndex, leftEndIndex);
  divide(arr, rightStartIndex, rightEndIndex);
  merge(arr, leftStartIndex, leftEndIndex, rightStartIndex, rightEndIndex);
};

const merge = (
  sortedList: number[],
  leftStartIndex: number,
  leftEndIndex: number,
  rightStartIndex: number,
  rightEndIndex: number
) => {
  if (
    !(
      leftStartIndex <= leftEndIndex &&
      leftEndIndex < rightStartIndex &&
      rightStartIndex <= rightEndIndex
    )
  )
    return;

  const result: number[] = [];

  let i = leftStartIndex;
  let j = rightStartIndex;
  while (i <= leftEndIndex && j <= rightEndIndex) {
    if (sortedList[i] < sortedList[j]) {
      result.push(sortedList[i]);
      i++;
    } else if (sortedList[j] < sortedList[i]) {
      result.push(sortedList[j]);
      j++;
    } else {
      result.push(sortedList[i]);
      result.push(sortedList[j]);
      i++;
      j++;
    }
  }

  if (i <= leftEndIndex) result.push(...sortedList.slice(i, leftEndIndex + 1));
  else if (j <= rightEndIndex) result.push(...sortedList.slice(j, rightEndIndex + 1));

  sortedList.splice(leftStartIndex, rightEndIndex - leftStartIndex + 1, ...result);
};
