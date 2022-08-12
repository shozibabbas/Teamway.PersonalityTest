import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import AboutPage from './AboutPage';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<AboutPage/>
			</Router>
		</Provider>
	);
});

test('renders', () => {
	// renderComponent();
});