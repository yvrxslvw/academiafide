import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, IPost } from 'shared';

export const PostApi = createApi({
	reducerPath: 'api/posts',
	tagTypes: ['post'],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: builder => ({
		getPosts: builder.query<IPost[], null>({
			query: () => ({
				url: '/api/posts',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetPostsQuery } = PostApi;
