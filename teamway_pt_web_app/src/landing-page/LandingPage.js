import React from 'react';
import {Link} from 'react-router-dom';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

LandingPage.propTypes = {};

function LandingPage() {
	return (
		<div className="flex-fill d-flex flex-column justify-content-center align-items-center">
			<h1 className="display-1 text-primary fw-normal">Introvert <small
				className="text-secondary fw-light">or</small> Extrovert?</h1>
			<p>Discover your Personality Type in 5 simple questions</p>
			<Link to="/quiz/123" className="btn btn-outline-primary mt-2">
				<FontAwesomeIcon icon={solid('play')} className={'me-1'}/> Start Test</Link>
		</div>
	);
}

export default LandingPage;