import React from 'react';
import {render} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import LandingPage from './LandingPage';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<LandingPage/>
			</Router>
		</Provider>
	);
});

test('renders', () => {
	// renderComponent();
});

test('has action button', () => {
	// renderComponent();
	expect(screen.getByText(/start test/i)).toBeDefined();
});