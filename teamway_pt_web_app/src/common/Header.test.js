import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import Header from './Header';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<Header/>
			</Router>
		</Provider>
	);
});

test('renders', () => {
	// renderComponent();
});