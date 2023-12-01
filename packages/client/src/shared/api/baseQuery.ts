import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants';

const query = fetchBaseQuery({
	baseUrl: API_URL + '/api',
	credentials: 'include',
	prepareHeaders(headers) {
		const accessToken = window.localStorage.getItem('accessToken');
		if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
		return headers;
	},
});

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions,
) => {
	let response = await query(args, api, extraOptions);

	if (response.error) {
		if (response.error.status === 401) {
			const refreshResponse = await query({ url: '/auth/refresh', method: 'POST' }, api, extraOptions);

			if (
				refreshResponse.data &&
				typeof refreshResponse.data === 'object' &&
				'token' in refreshResponse.data &&
				typeof refreshResponse.data.token === 'string'
			) {
				window.localStorage.setItem('accessToken', refreshResponse.data.token);
				response = await query(args, api, extraOptions);
			}
		}
	}

	return response;
};
