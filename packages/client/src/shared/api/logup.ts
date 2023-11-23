import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'shared';

export const LogupApi = createApi({
	reducerPath: 'api/logup',
	tagTypes: ['logup'],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: builder => ({
		logup: builder.mutation<null, { login: string; password: string }>({
			query: body => ({
				url: '/api/auth/logup',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useLogupMutation } = LogupApi;
