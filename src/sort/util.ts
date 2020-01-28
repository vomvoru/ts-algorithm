/* eslint-disable no-param-reassign */

export const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};
