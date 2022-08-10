import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import QuizPage from './quiz-page/QuizPage';
import QASection from './quiz-page/QASection';
import ResultPage from './result-page/ResultPage';
import AboutPage from './about-page/AboutPage';
import LoginPage from './admin/login-page/LoginPage';
import Admin from './admin/Admin';
import CRUDPage from './admin/crud-page/CRUDPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}>
					<Route index element={<LandingPage/>}/>
					<Route path="quiz/:sessionId" element={<QuizPage/>}>
						<Route path=":questionNumber" element={<QASection/>}/>
					</Route>
					<Route path="result/:sessionId" element={<ResultPage/>}/>
					<Route path="about" element={<AboutPage/>}/>
				</Route>
				<Route path="/admin" element={<Admin/>}>
					<Route path="login" element={<LoginPage/>}/>
					<Route index element={<CRUDPage/>}/>
					<Route path={'*'} element={<Navigate to={'/admin'}/>}/>
				</Route>
				<Route path={'*'} element={<Navigate to={'/'}/>}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
