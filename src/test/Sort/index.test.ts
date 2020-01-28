import { ruSortTest } from './runSortTest';
import { quickSort, quickSortWithMidPivot } from '../../sort/quickSort/index';
import { bubbleSort } from '../../sort/bubbleSort/index';

ruSortTest('quickSort', quickSort);
ruSortTest('quickSortWithMidPivot', quickSortWithMidPivot);
ruSortTest('bubbleSort', bubbleSort);
