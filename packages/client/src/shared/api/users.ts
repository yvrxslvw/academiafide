import { createApi } from '@reduxjs/toolkit/query/react';
import { IRole } from 'shared/models';
import { baseQuery } from './baseQuery';

export interface UserInfo {
	id: number;
	login: string;
	image: string | null;
	email: string | null;
	email_confirmed: boolean;
	email_news: boolean;
	createdAt: string;
	roles: IRole[];
}

export const UsersApi = createApi({
	reducerPath: 'api/users',
	tagTypes: ['users'],
	baseQuery,
	endpoints: builder => ({
		getUserByName: builder.query<UserInfo, string>({
			query: name => ({
				url: `/users/info/${name}`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetUserByNameQuery } = UsersApi;
