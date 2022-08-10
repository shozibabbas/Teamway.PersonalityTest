import React from 'react';
import './App.css';
import {Outlet} from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';

function App() {
	return (
		<div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light bg-gradient">
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	);
}

export default App;
