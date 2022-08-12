import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import Footer from './Footer';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<Footer/>
			</Router>
		</Provider>
	);
});

test('renders', () => {
	// renderComponent();
});