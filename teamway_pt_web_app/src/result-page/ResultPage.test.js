import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import ResultPage from './ResultPage';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<ResultPage/>
			</Router>
		</Provider>
	);
});

test('renders', () => {
	// renderComponent();
});