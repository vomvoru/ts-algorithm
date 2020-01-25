import { IQueue } from './IQueue';
import { IStack } from './IStack';

export interface IDeque<T> extends IQueue<T>, IStack<T> {}
