import { createSlice } from '@reduxjs/toolkit';
import {} from './Post.actions';
import { IPost } from 'shared';

export interface PostState {
	entries: Record<number, IPost>;
}

const initialState: PostState = {
	entries: {
		1: {
			id: 1,
			title: 'I AM TITLE',
			content: 'I AM CONTENT',
		},
		2: {
			id: 2,
			title: 'Lorem ipsum',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit.\nNesciunt laboriosam voluptatem harum quibusdam repellendus non vero.\nDignissimos iste consequatur aspernatur sapiente ut qui similique, quibusdam est, nihil aut obcaecati delectus.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam voluptatem harum quibusdam repellendus non vero. Dignissimos iste consequatur aspernatur sapiente ut qui similique, quibusdam est, nihil aut obcaecati delectus.',
		},
		3: {
			id: 3,
			title: 'Links',
			content: 'https://github.com/yvrxslvw\n[Text link|https://github.com/yvrxslvw]',
		},
	},
};

const PostSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
});

export const { actions, reducer } = PostSlice;
