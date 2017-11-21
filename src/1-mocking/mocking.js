import { addPackage, getPackages } from '../0-unit-testing-basics/unit';

export const addThreePackages = (one, two, three) => {
	addPackage(one);
	addPackage(two);
	addPackage(three);
};

export const getCurrentMinute = () => {
	const currentDate = new Date();

	return currentDate.getMinutes();
};

export const getTotalPackagesTimesThree = () => {
	return getPackages().length * 3;
};
