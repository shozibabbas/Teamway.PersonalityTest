import {createApi} from '@reduxjs/toolkit/query/react';
import {CustomFetchBaseQuery} from './CustomFetchBaseQuery';

// Define a service using a base URL and expected endpoints
export const quizApi = createApi({
	reducerPath: 'quizApi',
	baseQuery: CustomFetchBaseQuery({
		baseUrl: '/quiz'
	}),
	endpoints: (builder) => ({
		startQuiz: builder.mutation({
			// query: (name) => `${name}`,
			queryFn() {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve({
							data: {
								sessionId: Math.floor(Math.random() * 999999) + 100000,
								currentQuestionId: 1,
								questions: [
									{
										id: 1,
										title: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
										selectedAnswerId: null,
										answers: [
											{
												id: 1,
												title: 'Don’t dare to interrupt them'
											},
											{
												id: 2,
												title: 'Think it’s more important to give them some of your time; work can wait'
											},
											{
												id: 3,
												title: 'Listen, but with only with half an ear'
											},
											{
												id: 4,
												title: 'Interrupt and explain that you are really busy at the moment'
											}
										]
									},
									{
										id: 2,
										title: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You: 1',
										selectedAnswerId: null,
										answers: [
											{
												id: 1,
												title: 'Don’t dare to interrupt them'
											},
											{
												id: 2,
												title: 'Think it’s more important to give them some of your time; work can wait'
											},
											{
												id: 3,
												title: 'Listen, but with only with half an ear'
											},
											{
												id: 4,
												title: 'Interrupt and explain that you are really busy at the moment'
											}
										]
									},
									{
										id: 3,
										title: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You: 2',
										selectedAnswerId: null,
										answers: [
											{
												id: 1,
												title: 'Don’t dare to interrupt them'
											},
											{
												id: 2,
												title: 'Think it’s more important to give them some of your time; work can wait'
											},
											{
												id: 3,
												title: 'Listen, but with only with half an ear'
											},
											{
												id: 4,
												title: 'Interrupt and explain that you are really busy at the moment'
											}
										]
									},
									{
										id: 4,
										title: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You: 3',
										selectedAnswerId: null,
										answers: [
											{
												id: 1,
												title: 'Don’t dare to interrupt them'
											},
											{
												id: 2,
												title: 'Think it’s more important to give them some of your time; work can wait'
											},
											{
												id: 3,
												title: 'Listen, but with only with half an ear'
											},
											{
												id: 4,
												title: 'Interrupt and explain that you are really busy at the moment'
											}
										]
									},
									{
										id: 5,
										title: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You: 4',
										selectedAnswerId: null,
										answers: [
											{
												id: 1,
												title: 'Don’t dare to interrupt them'
											},
											{
												id: 2,
												title: 'Think it’s more important to give them some of your time; work can wait'
											},
											{
												id: 3,
												title: 'Listen, but with only with half an ear'
											},
											{
												id: 4,
												title: 'Interrupt and explain that you are really busy at the moment'
											}
										]
									}
								]
							}
							// error: {
							// 	code: 'asd',
							// 	message: 'Error in Request'
							// }
						});
					}, 1000);
				});
			}
		}),
		submitAnswer: builder.mutation({
			// query: ({sessionId, questionId, answerId}) => `${name}`,
			queryFn() {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve({
							data: {}
							// error: {
							// 	code: 'asd',
							// 	message: 'Error in Request'
							// }
						});
					}, 1000);
				});
			}
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useStartQuizMutation,
	useSubmitAnswerMutation
} = quizApi;