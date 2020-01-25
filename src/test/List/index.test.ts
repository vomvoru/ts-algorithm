/* eslint-disable max-classes-per-file */

import { LinkedDeque } from '../../List/LinkedDeque';

import { runStackTest } from './runStackTest';
import { runQueueTest } from './runQueueTest';

runStackTest('LinkedDeque', class extends LinkedDeque<string> {});
runQueueTest('LinkedDeque', class extends LinkedDeque<string> {});
