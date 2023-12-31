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
			query: body => ({
				url: '/auth/recovery',
				method: 'POST',
				body,
			}),
		}),
		update: builder.mutation<{ error: string | undefined; message: string }, FormData>({
			query: body => ({
				url: '/auth/update',
				method: 'POST',
				body,
			}),
		}),
		emailConfirmation: builder.mutation<{ message: string }, { email: string; resend?: boolean }>({
			query: body => ({
				url: '/auth/email',
				method: 'POST',
				body,
			}),
		}),
		confirmEmail: builder.mutation<{ message: string }, { code: number }>({
			query: body => ({
				url: '/auth/email_confirmation',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const {
	useLogupMutation,
	useLoginMutation,
	useLogoutMutation,
	useRefreshMutation,
	useRecoveryMutation,
	useUpdateMutation,
	useEmailConfirmationMutation,
	useConfirmEmailMutation,
} = AuthApi;
