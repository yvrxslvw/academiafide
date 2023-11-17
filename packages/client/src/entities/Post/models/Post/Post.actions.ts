import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { PostState } from './Post.slice';
import { IPost } from 'shared';

type State = CombinedState<PostState>;

export const postApiFulfilled = (state: State, action: PayloadAction<IPost[]>) => {
	const entries = action.payload.reduce((record, post: IPost) => {
		record[post.id] = post;
		return record;
	}, {} as Record<number, IPost>);

	state.entries = { ...state.entries, ...entries };
};
