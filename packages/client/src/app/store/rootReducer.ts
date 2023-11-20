import { combineReducers } from '@reduxjs/toolkit';
import { PostSlice } from 'entities';
import { UserSlice } from './models';

export const rootReducer = combineReducers({
	user: UserSlice.reducer,
	post: PostSlice.reducer,
});
