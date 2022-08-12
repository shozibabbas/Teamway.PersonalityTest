import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {quizApi} from './Quiz.api';

export const store = configureStore({
	reducer: {
		[quizApi.reducerPath]: quizApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
			.concat(quizApi.middleware)
});

setupListeners(store.dispatch);
