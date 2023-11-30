import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const AuthApi = createApi({
	reducerPath: 'api/auth',
	tagTypes: ['auth'],
	baseQuery,
	endpoints: builder => ({
		logup: builder.mutation<{ token: string }, { login: string; password: string }>({
			query: body => ({
				url: '/auth/logup',
				method: 'POST',
				body,
			}),
		}),
		login: builder.mutation<{ token: string }, { login: string; password: string }>({
			query: body => ({
				url: '/auth/login',
				method: 'POST',
				body,
			}),
		}),
		logout: builder.mutation<void, void>({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
			}),
		}),
	}),
});

export const { useLogupMutation, useLoginMutation, useLogoutMutation } = AuthApi;
