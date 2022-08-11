import React, {useState} from 'react';
import {Badge, ListGroup, ProgressBar} from 'react-bootstrap';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {selectQuestion, selectQuizStats} from '../redux/Quiz.slice';
import {useSelector} from 'react-redux';
import {useSubmitAnswerMutation} from '../redux/Quiz.api';
import CustomButton from '../common/CustomButton';

QASection.propTypes = {};

function QASection() {
	const question = useSelector(selectQuestion);
	const stats = useSelector(selectQuizStats);
	const [selectedAnswer, setSelectedAnswer] = useState(null);

	const [submitAnswer, {isLoading}] = useSubmitAnswerMutation();

	const onSubmitAnswer = () => {
		submitAnswer({answerId: selectedAnswer.id})
			.unwrap()
			.then(() => {
				setSelectedAnswer(null);
			})
			.catch(e => {
				alert(e);
			});
	};
	return (
		<div className="w-75 d-flex flex-column">
			<div className="flex-grow-1 d-flex flex-column justify-content-evenly">
				<ProgressBar now={stats.completedQuestions / stats.totalQuestions * 100}
					label={`${stats.completedQuestions} / ${stats.totalQuestions}`} variant={'secondary'}/>
				<h2 className="display-5">{question.title}</h2>
			</div>
			<div className="flex-grow-1">
				<ListGroup variant={'flush'}>
					{question.answers.map((answer, index) => (
						<ListGroup.Item key={answer.id} action className={'p-3'}
							onClick={() => setSelectedAnswer(answer)}
							active={selectedAnswer?.id === answer.id}>
							<Badge bg={'light'} text={'dark'} className=" me-3">{index + 1}</Badge>
							{answer.title}
						</ListGroup.Item>
					))}
				</ListGroup>
				<div className="mt-4 d-flex flex-column justify-content-ends align-items-end">
					<CustomButton variant={'outline-primary'} disabled={!selectedAnswer} isLoading={isLoading}
						onClick={() => onSubmitAnswer()}>Submit
                        answer <FontAwesomeIcon
							icon={solid('arrow-right')}/></CustomButton>
				</div>
			</div>
		</div>
	);
}

export default QASection;