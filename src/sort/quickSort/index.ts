/* eslint-disable no-param-reassign */

import { sortFunc } from '../types';

export const quickSort: sortFunc = (arr, leftIndex, rightIndex) =>
  quickSortBase(arr, leftIndex, rightIndex);

export const quickSortWithMidPivot: sortFunc = (arr, leftIndex, rightIndex) =>
  quickSortBase(arr, leftIndex, rightIndex, true);

const quickSortBase = (
  arr: number[],
  leftIndex: number,
  rightIndex: number,
  useMidPivot?: boolean
) => {
  if (!isValid(leftIndex, rightIndex)) return;

  const pivotIndex = pivotSort(
    arr,
    leftIndex,
    rightIndex,
    useMidPivot ? getPivotIndex(arr, leftIndex, rightIndex) : leftIndex
  );

  quickSortBase(arr, leftIndex, pivotIndex - 1);
  quickSortBase(arr, pivotIndex + 1, rightIndex);
};

const isValid = (leftIndex: number, rightIndex: number) => leftIndex < rightIndex;

const pivotSort = (arr: number[], leftIndex: number, rightIndex: number, pivotIndex: number) => {
  const pivot = arr[pivotIndex];

  swap(arr, leftIndex, pivotIndex);
  pivotIndex = leftIndex;
  leftIndex++;

  do {
    while (arr[leftIndex] <= pivot) leftIndex++;
    while (arr[rightIndex] > pivot) rightIndex--;

    if (leftIndex >= rightIndex) break;

    swap(arr, leftIndex, rightIndex);
  } while (leftIndex < rightIndex);

  swap(arr, rightIndex, pivotIndex);

  return rightIndex;
};

const getPivotIndex = (arr: number[], leftIndex: number, rightIndex: number) => {
  const leftPivot = arr[leftIndex];

  const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
  const midPivot = arr[midIndex];

  const rightPivot = arr[rightIndex];

  if (
    (leftPivot <= midPivot && midPivot <= rightPivot) ||
    (rightPivot <= midPivot && midPivot <= leftPivot)
  )
    return midIndex;

  if (
    (midPivot <= leftPivot && leftPivot <= rightPivot) ||
    (rightPivot <= leftPivot && leftPivot <= midPivot)
  )
    return leftIndex;

  return rightIndex;
};

const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};
