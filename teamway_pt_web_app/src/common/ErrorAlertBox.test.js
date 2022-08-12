import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {screen} from '@testing-library/dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import ErrorAlertBox from './ErrorAlertBox';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<ErrorAlertBox status={400} data={{message: 'testing error'}}/>
			</Router>
		</Provider>
	);
});

test('renders', () => {
	// renderComponent();
});

test('shows correct information', () => {
	expect(screen.getByText(/error 400/i)).toBeDefined();
	expect(screen.getByText(/testing error/i)).toBeDefined();
});