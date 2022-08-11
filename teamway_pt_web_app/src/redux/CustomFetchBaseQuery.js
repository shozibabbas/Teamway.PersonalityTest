import {fetchBaseQuery} from '@reduxjs/toolkit/query';

export const CustomFetchBaseQuery = (fetchBaseQueryArgs) => {
	let baseQuery = fetchBaseQuery({
		baseUrl: (fetchBaseQueryArgs.root ?? process.env.REACT_APP_API_BASE_URI) + fetchBaseQueryArgs.baseUrl,
		// prepareHeaders: (headers, {getState}) => {
		// 	try {
		// 		const token = getState().authentication.access_token;
		// 		if (token) {
		// 			headers.set("authorization", `Bearer ${token}`);
		// 		}
		// 	} catch (e) {
		// 		console.error("error in setting authorization header: ", e);
		// 	}
		// 	return headers;
		// },
	});
	return async (args, api, extraOptions) => {
		try {
			return await baseQuery(args, api, extraOptions);
		} catch (e) {
			console.error(e);
			throw e;
		}
	};
};
