import React from 'react';
import {Outlet} from 'react-router-dom';

QuizPage.propTypes = {};

function QuizPage() {
	return (
		<div className="w-100 flex-fill d-flex flex-row justify-content-between">
			<Outlet/>
		</div>
	);
}

export default QuizPage;