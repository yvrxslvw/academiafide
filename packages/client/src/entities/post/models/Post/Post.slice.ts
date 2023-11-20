import { createSlice } from '@reduxjs/toolkit';
import {} from './Post.actions';
import { IPost } from 'shared';

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
});

export const { actions, reducer } = PostSlice;
