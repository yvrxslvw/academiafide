import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'shared';

export const AuthApi = createApi({
	reducerPath: 'api/auth',
	tagTypes: ['auth'],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL + '/api/auth' }),
	endpoints: builder => ({
		logup: builder.mutation<{ token: string }, { login: string; password: string }>({
			query: body => ({
				url: '/logup',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useLogupMutation } = AuthApi;
