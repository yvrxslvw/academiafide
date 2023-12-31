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
		updateUser: builder.mutation<{ error: string | undefined; message: string }, { id: number; body: FormData }>({
			query: ({ id, body }) => ({
				url: `/users/${id}`,
				method: 'PATCH',
				body,
			}),
		}),
	}),
});

export const { useGetUserByNameQuery, useUpdateUserMutation } = UsersApi;
