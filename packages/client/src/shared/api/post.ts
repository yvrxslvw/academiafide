import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, IPost } from 'shared';

export const PostApi = createApi({
	reducerPath: 'api/posts',
	tagTypes: ['post'],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL + '/api' }),
	endpoints: builder => ({
		getPosts: builder.query<IPost[], null>({
			query: () => ({
				url: '/posts',
				method: 'GET',
			}),
		}),
		createPost: builder.mutation<IPost, FormData>({
			query: body => ({
				url: '/posts',
				method: 'PUT',
				body,
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
				},
			}),
		}),
	}),
});

export const { useGetPostsQuery, useCreatePostMutation } = PostApi;
