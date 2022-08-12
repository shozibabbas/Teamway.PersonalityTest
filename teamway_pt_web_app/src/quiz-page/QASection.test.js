import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import QASection from './QASection';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<QASection/>
			</Router>
		</Provider>
	);
});

test('renders', () => {
	// renderComponent();
});