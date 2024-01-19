import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { IRole } from 'shared/models';

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
	}),
});

export const { useGetAllRolesQuery } = RolesApi;
