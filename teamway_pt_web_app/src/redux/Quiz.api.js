import {createApi} from '@reduxjs/toolkit/query/react';
import {CustomFetchBaseQuery} from './CustomFetchBaseQuery';

// Define a service using a base URL and expected endpoints
export const quizApi = createApi({
	reducerPath: 'quizApi',
	baseQuery: CustomFetchBaseQuery({
		baseUrl: '/quiz'
	}),
	tagTypes: ['Quiz'],
	endpoints: (builder) => ({
		startQuiz: builder.mutation({
			query: () => ({url: '/start_quiz', method: 'post'}),
			invalidatesTags: ['Quiz']
		}),
		getQuizDetail: builder.query({
			query: ({sessionId}) => ({url: '/quiz_detail/' + sessionId, method: 'get'}),
			providesTags: ['Quiz']
		}),
		submitAnswer: builder.mutation({
			query: ({sessionId, ...body}) => ({url: '/quiz_detail/' + sessionId, method: 'put', body}),
			invalidatesTags: ['Quiz']
		}),
		getQuizResult: builder.query({
			query: ({sessionId}) => ({url: '/result/' + sessionId, method: 'get'}),
			providesTags: ['Quiz']
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useStartQuizMutation,
	useGetQuizDetailQuery,
	useSubmitAnswerMutation,
	useGetQuizResultQuery
} = quizApi;