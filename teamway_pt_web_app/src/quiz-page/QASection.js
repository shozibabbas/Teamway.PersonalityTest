import React, {useEffect, useState} from 'react';
import {Badge, ListGroup, ProgressBar, Spinner} from 'react-bootstrap';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useGetQuizDetailQuery, useSubmitAnswerMutation} from '../redux/Quiz.api';
import CustomButton from '../common/CustomButton';
import {useNavigate, useParams} from 'react-router-dom';
import ErrorAlertBox from '../common/ErrorAlertBox';

QASection.propTypes = {};

function QASection() {
	const {sessionId} = useParams();
	const navigate = useNavigate();
	const {data: quizDetail, isLoading: quizDetailIsLoading, error} = useGetQuizDetailQuery({sessionId});
	const [submitAnswer, {isLoading}] = useSubmitAnswerMutation();
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [question, setQuestion] = useState(null);
	const [stats, setStats] = useState({});

	const onSubmitAnswer = () => {
		submitAnswer({sessionId, answerId: selectedAnswer.id, questionId: question.id})
			.unwrap()
			.then((res) => {
				setSelectedAnswer(null);
				if (res.isCompleted) {
					navigate('/result/' + sessionId);
				}
			})
			.catch(e => {
				alert(e);
			});
	};

	useEffect(() => {
		if (!quizDetail || error) {
			return;
		}
		const currentQuestion = quizDetail.questions.find(x => x.id === quizDetail.currentQuestionId);
		const currentAnswer = currentQuestion.answers.find(x => x.id === quizDetail.userAnswers[currentQuestion.id]);
		setQuestion(currentQuestion);
		setSelectedAnswer(currentAnswer);
		setStats({
			totalQuestions: quizDetail.questions.length,
			completedQuestions: quizDetail.questions.findIndex(x => x.id === quizDetail.currentQuestionId) + 1
		});
	}, [quizDetail]);

	if (quizDetailIsLoading) {
		return (
			<div className="w-75 d-flex flex-column align-items-center">
				<Spinner animation={'border'}/>
			</div>
		);
	}
	if (!question || error) {
		return (
			<div className="w-75 d-flex flex-column">
				<ErrorAlertBox {...error} />
			</div>
		);
	}
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