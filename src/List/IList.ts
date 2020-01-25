export interface IList<T> {
  first(): T | null;
  end(): T | null;
  count(): number;
  empty(): boolean;
}
