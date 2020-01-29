import { ruSortTest } from './runSortTest';
import { quickSort, quickSortWithMidPivot } from '../../sort/quickSort/index';
import { bubbleSort } from '../../sort/bubbleSort';
import { insertSort } from '../../sort/insertSort';
import { selectionSort } from '../../sort/selectionSort';

ruSortTest('quickSort', quickSort);
ruSortTest('quickSortWithMidPivot', quickSortWithMidPivot);
ruSortTest('bubbleSort', bubbleSort);
ruSortTest('insertSort', insertSort);
ruSortTest('selectionSort', selectionSort);
