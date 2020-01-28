export const getShuffleList = (num: number, min: number, max: number) =>
  Array.from({ length: num }).map(() => min + Math.floor((max - min + 1) * Math.random()));
