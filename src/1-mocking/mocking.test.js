import {
	addThreePackages,
	getCurrentMinute,
	getTotalPackagesTimesThree,
} from './mocking';
import { addPackage } from '../0-unit-testing-basics/unit';

import mockdate from 'mockdate';

jest.mock('../0-unit-testing-basics/unit', () => ({
	/**
	 * 1.1. Mocking a function to assert if it was called
	 * jest.fn()
	 */
	// addPackage: ...,
	/**
	 * 1.3. Mocking a function to return a specific value
	 */
	// getPackages: ...,
}));

/**
 * 1.1. Mocking a function to assert if it was called
 */
test('The addThreePackages function should call the add package function three times', () => {
	// addThreePackages(...);
	// expect(...).toHaveBeenCalledTimes(...);
});

/**
 * 1.2. Mocking the date object
 */
test('This test will work most of the time', () => {
	expect(getCurrentMinute()).not.toBe(17);
});

test('The getCurrentMinute function should return the current minutes', () => {
	// /**
	//  * Mocking the date object by overwriting a global variable
	//  */
	// const constantDate = new Date('2017-11-20T15:31:20');
	// global.Date = class extends Date {
	// 	constructor() {
	// 		super();
	// 		return constantDate;
	// 	}
	// };
	/**
	 * Mocking the date object by using the mockdate package
	 */
	// mockdate.set(...);
	// expect(..).toBe(...);
});

/**
 * 1.3. Mocking a function to return a specific value
 */
test('The getTotalPackagesTimesThree function should multiply the current total packages times three', () => {
	//
});
