import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { IUser } from '../models';

export const AuthApi = createApi({
	reducerPath: 'api/auth',
	tagTypes: ['auth'],
	baseQuery,
	endpoints: builder => ({
		logup: builder.mutation<{ token: string; user: IUser }, { login: string; password: string }>({
			query: body => ({
				url: '/auth/logup',
				method: 'POST',
				body,
			}),
		}),
		login: builder.mutation<{ token: string; user: IUser }, { login: string; password: string }>({
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
		refresh: builder.mutation<{ token: string; user: IUser }, void>({
			query: () => ({
				url: '/auth/refresh',
				method: 'POST',
			}),
		}),
		recovery: builder.mutation<{ message: string }, { email: string }>({
			query: () => ({
				url: '/auth/recovery',
				method: 'POST',
			}),
		}),
	}),
});

export const { useLogupMutation, useLoginMutation, useLogoutMutation, useRefreshMutation, useRecoveryMutation } = AuthApi;
