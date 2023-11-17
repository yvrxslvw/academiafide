import { createSlice } from '@reduxjs/toolkit';
import { IPost } from 'shared';
// import { postApiFulfilled } from './Post.actions';

export interface PostState {
	entries: Record<number, IPost>;
}

const initialState: PostState = {
	entries: {
		1: {
			id: 1,
			title: 'Hello!',
			content: 'Hi, I am the latest post among non-existent posts!',
		},
	},
};

const PostSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
});

export const { actions, reducer } = PostSlice;
