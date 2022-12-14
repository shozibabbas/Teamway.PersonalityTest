import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './redux/store';
import {Provider} from 'react-redux';

test('renders', () => {
	render(
		<Provider store={store}>
			<Router>
				<App/>
			</Router>
		</Provider>
	);
});
