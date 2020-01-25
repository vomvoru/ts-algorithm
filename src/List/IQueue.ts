import { IList } from './IList';

export interface IQueue<T> extends IList<T> {
  enqueue(item: T): void;
  dequque(): T | null;
}
