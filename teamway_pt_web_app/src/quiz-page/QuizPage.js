import React from 'react';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import QASection from './QASection';
import {Button} from 'react-bootstrap';

QuizPage.propTypes = {};

function QuizPage() {
	return (
		<div className="flex-fill d-flex flex-row">
			<div className="flex-grow-1 d-flex flex-column justify-content-center align-items-start">
				<Button variant={'outline-secondary'} className="border-0">
					<FontAwesomeIcon icon={solid('arrow-left')}/>
				</Button>
			</div>
			<QASection/>
			<div className="flex-grow-1 d-flex flex-column justify-content-center align-items-end">
				{/*<button className="btn btn-outline-secondary border-0">*/}
				{/*	<FontAwesomeIcon icon={solid('arrow-right')}/>*/}
				{/*</button>*/}
			</div>
		</div>
	);
}

export default QuizPage;