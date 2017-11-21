export const generateFancyObject = count => ({
	one: 1 * count,
	two: 2 * count,
	three: 3 * count,
	four: 4 * count,
});

export const generateArray = count =>
	Array.from(Array(count)).map((number, index) => index);
