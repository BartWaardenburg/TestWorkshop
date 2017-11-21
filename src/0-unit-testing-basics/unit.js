/**
 * 0.1 Assertions
 */
export const add = (a, b) => a + b;

export const multiply = (a, b) => a * b;

/**
 * 0.2 Assertions with side effects
 */
export const packages = ['europe', 'partner'];

export const addPackage = newPackage => {
	packages.push(newPackage);
};

export const addPackagePure = (newPackage, packages) => [
	...packages,
	newPackage,
];

export const getPackages = () => packages;
