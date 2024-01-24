import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { IRole, IUser } from 'shared/models';

export const RolesApi = createApi({
	reducerPath: 'api/roles',
	tagTypes: ['roles'],
	baseQuery,
	endpoints: builder => ({
		getAllRoles: builder.query<IRole[], void>({
			query: () => ({
				url: '/roles',
				method: 'GET',
			}),
		}),
		addRole: builder.mutation<IUser, { userId: number; roleTag: string }>({
			query: ({ userId, roleTag }) => ({
				url: `/users/${userId}/roles`,
				method: 'PUT',
				body: {
					tag: roleTag,
				},
			}),
		}),
		removeRole: builder.mutation<IUser, { userId: number; roleTag: string }>({
			query: ({ userId, roleTag }) => ({
				url: `/users/${userId}/roles`,
				method: 'DELETE',
				body: {
					tag: roleTag,
				},
			}),
		}),
	}),
});

export const { useGetAllRolesQuery, useAddRoleMutation, useRemoveRoleMutation } = RolesApi;
