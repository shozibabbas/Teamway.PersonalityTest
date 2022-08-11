import React from 'react';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';

QuizPage.propTypes = {};

function QuizPage() {
	return (
		<div className="w-100 flex-fill d-flex flex-row justify-content-between">
			<div className="d-flex flex-column justify-content-center align-items-start">
				<Button variant={'outline-secondary'} className="border-0">
					<FontAwesomeIcon icon={solid('arrow-left')}/>
				</Button>
			</div>
			<Outlet/>
			<div className="d-flex flex-column justify-content-center align-items-end">
				{/*<button className="btn btn-outline-secondary border-0">*/}
				{/*	<FontAwesomeIcon icon={solid('arrow-right')}/>*/}
				{/*</button>*/}
			</div>
		</div>
	);
}

export default QuizPage;