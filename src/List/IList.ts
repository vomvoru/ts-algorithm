export interface IList<T> {
  insert(item: T): void;
  first(): T | null;
  next(): T | null;
  remove(): void;
  count(): number;
}
