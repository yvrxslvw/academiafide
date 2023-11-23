import { createSlice } from '@reduxjs/toolkit';
import { postApiFulfilled } from './Post.actions';
import { IPost } from 'shared';
import { PostApi } from 'shared';

export interface PostState {
	entries: Record<number, IPost>;
}

const initialState: PostState = {
	entries: {},
};

const PostSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addMatcher(PostApi.endpoints.getPosts.matchFulfilled, postApiFulfilled);
	},
});

export const { actions, reducer } = PostSlice;
