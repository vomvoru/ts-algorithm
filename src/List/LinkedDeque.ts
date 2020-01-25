import { IDeque } from './IDeque';

interface INode<T> {
  prev?: INode<T>;
  data: T | null;
  next?: INode<T>;
}

const DUMMY_NODE = { data: null };

export class LinkedDeque<T> implements IDeque<T> {
  private tail: INode<T> = { ...DUMMY_NODE };
  private head: INode<T> = { ...DUMMY_NODE };
  private numOfData: number = 0;

  constructor() {
    this.tail.prev = this.head;
    this.head.next = this.tail;
  }

  first() {
    return this.head.next?.data ?? null;
  }

  end() {
    return this.tail.prev?.data ?? null;
  }

  push(item: T) {
    const newData: INode<T> = {
      data: item,
    };

    if (this.tail.prev) {
      this.tail.prev.next = newData;
      newData.prev = this.tail.prev;
    }

    newData.next = this.tail;
    this.tail.prev = newData;

    this.numOfData++;
  }

  enqueue(item: T) {
    this.push(item);
  }

  pop() {
    if (this.empty()) return null;

    const latestData = this.tail.prev?.data ?? null;

    if (this.tail.prev && this.tail.prev.prev) {
      this.tail.prev = this.tail.prev.prev;
      this.tail.prev.next = this.tail;
    }

    this.numOfData--;

    return latestData;
  }

  dequque() {
    if (this.empty()) return null;

    const firstData = this.head.next?.data ?? null;

    if (this.head.next && this.head.next.next) {
      this.head.next = this.head.next.next;
      this.head.next.prev = this.head;
    }

    this.numOfData--;

    return firstData;
  }

  count() {
    return this.numOfData;
  }

  empty() {
    return this.count() === 0;
  }
}
