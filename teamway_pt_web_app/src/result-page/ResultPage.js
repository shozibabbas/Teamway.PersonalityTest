import React from 'react';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useGetQuizResultQuery} from '../redux/Quiz.api';
import {useNavigate, useParams} from 'react-router-dom';
import IntrovertResult from './IntrovertResult';
import ExtrovertResult from './ExtrovertResult';
import {Button, Spinner} from 'react-bootstrap';
import ErrorAlertBox from '../common/ErrorAlertBox';

ResultPage.propTypes = {};

function ResultPage() {
	const {sessionId} = useParams();
	const navigate = useNavigate();
	const {data: result, isLoading, error} = useGetQuizResultQuery({sessionId});

	const renderResult = () => {
		switch (result.personalityType) {
		case 'INTROVERT':
			return (
				<IntrovertResult/>
			);
		case 'EXTROVERT':
			return (
				<ExtrovertResult/>
			);
		}
	};

	if (isLoading) {
		return (
			<div className="flex-fill container-fluid d-flex flex-column justify-content-center align-items-center">
				<Spinner animation={'border'}/>
			</div>
		);
	}
	if (!result || error) {
		return (
			<div className="flex-fill container-fluid d-flex flex-column justify-content-center align-items-center">
				<ErrorAlertBox {...error} />
			</div>
		);
	}
	return (
		<div className="flex-fill container-fluid d-flex flex-column justify-content-center align-items-center">
			{renderResult()}
			<div className="row w-100 mt-5">
				<div className="col d-flex flex-column justify-content-center align-items-center">
					<p>Share your result!</p>
					<div className={'d-flex flex-column'}>
						<Button variant={'outline-dark'} className="rounded-0 border-0 mb-3"
							type="button">
							<FontAwesomeIcon icon={solid('clipboard')} className={'me-1'}/> Copy Results to Clipboard
						</Button>
						<Button variant={'outline-primary'} className="rounded-0 border-0"
							type="button" onClick={() => navigate('/')}>
							<FontAwesomeIcon icon={solid('play')} className={'me-1'}/> Test again
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResultPage;