import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, IUser } from 'shared';

export const UserApi = createApi({
	reducerPath: 'api/user',
	tagTypes: ['user'],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL + '/api/user' }),
	endpoints: builder => ({
		getUserInfo: builder.mutation<IUser, void>({
			query: () => ({
				url: '/',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
				},
			}),
		}),
		recoveryPassword: builder.mutation<{ message: string }, string>({
			query: email => ({
				url: '/recovery',
				method: 'POST',
				body: {
					email,
				},
			}),
		}),
	}),
});

export const { useGetUserInfoMutation, useRecoveryPasswordMutation } = UserApi;
