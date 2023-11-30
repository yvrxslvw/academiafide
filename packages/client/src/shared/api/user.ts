import { createApi } from '@reduxjs/toolkit/query/react';
import { IUser } from 'shared';
import { baseQuery } from './baseQuery';

export const UserApi = createApi({
	reducerPath: 'api/user',
	tagTypes: ['user'],
	baseQuery,
	endpoints: builder => ({
		getUserInfo: builder.mutation<IUser, void>({
			query: () => ({
				url: '/user',
				method: 'GET'
			}),
		}),
		recoveryPassword: builder.mutation<{ message: string }, string>({
			query: email => ({
				url: '/user/recovery',
				method: 'POST',
				body: {
					email,
				},
			}),
		}),
	}),
});

export const { useGetUserInfoMutation, useRecoveryPasswordMutation } = UserApi;
