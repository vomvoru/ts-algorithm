import { IList } from './IList';

export interface IStack<T> extends IList<T> {
  push(item: T): void;
  pop(): T | null;
}
