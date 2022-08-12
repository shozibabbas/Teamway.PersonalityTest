import React from 'react';
import {render} from '@testing-library/react';
import CopyToClipboardButton from './CopyToClipboardButton';

beforeEach(() => {
	render(
		<CopyToClipboardButton/>
	);
});

test('renders', () => {
	// renderComponent();
});