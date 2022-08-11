import {createSlice} from '@reduxjs/toolkit';
import {quizApi} from './Quiz.api';

const sliceName = 'quiz';
const initialState = {
	sessionId: null,
	questionIndex: 0,
	questions: []
};

export const QuizSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		gotoPreviousQuestion(state) {
			state.questionIndex--;
			if (state.questionIndex < 0) {
				state.questionIndex = 0;
			}
		},
	},
	extraReducers(builder) {
		builder.addMatcher(quizApi.endpoints.startQuiz.matchFulfilled, (state, action) => {
			const {sessionId, currentQuestionId, questions} = action.payload;
			state.sessionId = sessionId;
			state.questions = questions;
			let currentQuestionIndex = questions.map(object => object.id).indexOf(currentQuestionId);
			if (currentQuestionIndex < 0) {
				currentQuestionIndex = 0;
			}
			state.questionIndex = currentQuestionIndex;
		});
		builder.addMatcher(quizApi.endpoints.submitAnswer.matchFulfilled, (state) => {
			if (state.questionIndex + 1 < state.questions.length) {
				state.questionIndex++;
			}
		});
	}
});

export const {
	gotoPreviousQuestion
} = QuizSlice.actions;

export const selectQuestion = state => state[sliceName].questions[state[sliceName].questionIndex];
export const selectQuizStats = state => ({
	totalQuestions: state[sliceName].questions.length,
	completedQuestions: state[sliceName].questionIndex + 1
});