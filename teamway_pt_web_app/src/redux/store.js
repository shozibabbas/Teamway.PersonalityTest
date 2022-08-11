import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {quizApi} from './Quiz.api';
import {QuizSlice} from './Quiz.slice';
// import {ocrApi} from "./OCR.api";
// import {DrawerSlice} from "./Drawer.slice";

export const store = configureStore({
	reducer: {
		[quizApi.reducerPath]: quizApi.reducer,
		[QuizSlice.name]: QuizSlice.reducer,
		// [ocrApi.reducerPath]: ocrApi.reducer,
		// [DrawerSlice.name]: DrawerSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
			.concat(quizApi.middleware)
	// .concat(ocrApi.middleware)
});

setupListeners(store.dispatch);
