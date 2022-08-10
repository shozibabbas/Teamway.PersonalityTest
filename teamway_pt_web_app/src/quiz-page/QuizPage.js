import React from 'react';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import QASection from './QASection';

QuizPage.propTypes = {};

function QuizPage() {
	return (
		<div className="flex-fill d-flex flex-row">
			<div className="flex-grow-1 d-flex flex-column justify-content-center align-items-start">
				<button className="btn btn-outline-secondary border-0">
					<FontAwesomeIcon icon={solid('arrow-left')}/>
				</button>
			</div>
			<QASection/>
			<div className="flex-grow-1 d-flex flex-column justify-content-center align-items-end">
				<button className="btn btn-outline-secondary border-0">
					<FontAwesomeIcon icon={solid('arrow-right')}/>
				</button>
			</div>
		</div>
	);
}

export default QuizPage;