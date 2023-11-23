import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, IUser } from 'shared';

export const UserApi = createApi({
	reducerPath: 'api/user',
	tagTypes: ['user'],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL + '/api/user' }),
	endpoints: builder => ({
		getInfo: builder.query<IUser, string>({
			query: token => ({
				url: '/',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
	}),
});

export const { useGetInfoQuery } = UserApi;
