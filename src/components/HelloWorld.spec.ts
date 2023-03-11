import HelloWorldVue from './HelloWorld.vue';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';

describe('HelloWorld', () => {
	it('renders the message prop', () => {
		const { getByText } = render(HelloWorldVue, {
			props: {
				msg: 'Hello World!',
			},
		});
		expect(getByText('Hello World!')).toBeTruthy();
	});
});
