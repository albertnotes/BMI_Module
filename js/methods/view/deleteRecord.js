import renderRecord from './renderRecord.js';
import renderAverage from './renderAverage.js';
import { bmiStatus } from '../../variables/utility.js';

export default function deleteRecord() {
	bmiStatus['averageCount'] = {
		number: 0,
		value: 0,
	};
	renderRecord();
	renderAverage(bmiStatus['averageCount']);
}
