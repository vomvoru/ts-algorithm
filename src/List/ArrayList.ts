import { IList } from './IList';

const LIST_LEN_MAX = 100;

export class ArrayList<T> implements IList<T> {
  private items: (T | null)[] = Array.from({ length: LIST_LEN_MAX }).map(() => null);
  private numOfData = 0;
  private curPosition = -1;

  insert(item: T) {
    if (this.numOfData >= LIST_LEN_MAX) {
      console.log('저장이 불가능 합니다.');
      return;
    }

    this.items[this.numOfData] = item;
    this.numOfData++;
  }

  first() {
    if (this.numOfData === 0) return null;

    this.curPosition = 0;
    return this.items[this.curPosition];
  }

  next() {
    if (this.curPosition >= this.numOfData - 1) return null;

    this.curPosition++;
    return this.items[this.curPosition];
  }

  remove() {
    if (this.curPosition < 0) return null;
    const removeItem = this.items[this.curPosition];

    for (let i = this.curPosition; i < this.numOfData - 1; i++) this.items[i] = this.items[i + 1];

    this.numOfData--;
    this.curPosition--;

    return removeItem;
  }

  count() {
    return this.numOfData;
  }
}
