// https://preactjs.com/
import { h } from 'preact';
// https://github.com/mzgoddard/preact-render-spy
import { deep } from 'preact-render-spy';

import Button from './Button';

/**
 * 4.1 Asserting on rendering
 */
test('The button component should contain the button html element', () => {
	const context = deep(<Button />);
	const button = context.find('button');

	expect(button.length).toBe(1);
});

// What else is there to check for the button component?

/**
 * 4.2. Asserting on interactions
 */
test('The button component should be able to trigger click actions', () => {
	const mock = jest.fn();
	const context = deep(<Button onClick={mock} />);

	context.find('button').simulate('click');

	expect(mock).toBeCalled();
});

test('The button component should render text correctly', () => {});

// Try to add more props to the Button component and test if they do what they should be doing
