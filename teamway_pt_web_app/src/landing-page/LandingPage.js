import React from 'react';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useStartQuizMutation} from '../redux/Quiz.api';
import CustomButton from '../common/CustomButton';
import {useNavigate} from 'react-router-dom';

LandingPage.propTypes = {};

function LandingPage() {
	const navigate = useNavigate();
	const [startQuiz, {isLoading}] = useStartQuizMutation();

	const onStartQuiz = () => {
		startQuiz()
			.unwrap()
			.then(res => {
				navigate('quiz/' + res.sessionId);
			})
			.catch(e => {
				alert(JSON.stringify(e));
			});
	};

	return (
		<div className="flex-fill d-flex flex-column justify-content-center align-items-center">
			<h1 className="display-1 text-primary fw-normal">Introvert <small
				className="text-secondary fw-light">or</small> Extrovert?</h1>
			<p>Discover your Personality Type in 5 simple questions</p>
			<CustomButton variant={'outline-primary'} className="mt-2" onClick={onStartQuiz} isLoading={isLoading}
				loadingText={'Starting Test'}>
				<FontAwesomeIcon icon={solid('play')} className={'me-1'}/> Start Test
			</CustomButton>
		</div>
	);
}

export default LandingPage;