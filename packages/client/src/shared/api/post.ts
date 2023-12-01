import { createApi } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models';
import { baseQuery } from './baseQuery';

export const PostApi = createApi({
	reducerPath: 'api/posts',
	tagTypes: ['post'],
	baseQuery,
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
			}),
		}),
		deletePost: builder.mutation<{ message: string }, number>({
			query: id => ({
				url: `/posts/${id}`,
				method: 'DELETE',
			}),
		}),
		editPost: builder.mutation<IPost, FormData>({
			query: body => ({
				url: `/posts/${body.get('id')}`,
				method: 'PATCH',
				body,
			}),
		}),
	}),
});

export const { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation, useEditPostMutation } = PostApi;
