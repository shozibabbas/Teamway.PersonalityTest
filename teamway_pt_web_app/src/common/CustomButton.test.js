import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {screen} from '@testing-library/dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import CustomButton from './CustomButton';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<CustomButton>
                    My test button
				</CustomButton>
			</Router>
		</Provider>
	);
});

test('renders', () => {
	// renderComponent();
});

test('shows correct information', () => {
	expect(screen.getByText(/my test button/i)).toBeDefined();
});