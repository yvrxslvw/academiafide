import { combineReducers } from '@reduxjs/toolkit';
import { PostSlice, ShopSlice } from 'entities';
import { UserSlice } from './models';
import { PostApi } from 'shared';

export const rootReducer = combineReducers({
	user: UserSlice.reducer,
	[PostApi.reducerPath]: PostApi.reducer,
	post: PostSlice.reducer,
	shop: ShopSlice.reducer,
});
