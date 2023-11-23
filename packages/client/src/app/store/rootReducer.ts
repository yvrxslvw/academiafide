import { combineReducers } from '@reduxjs/toolkit';
import { LogupApi, PostApi, ShopApi } from 'shared';
import { PostSlice, ShopSlice } from 'entities';
import { UserSlice } from './models';

export const rootReducer = combineReducers({
	user: UserSlice.reducer,
	[PostApi.reducerPath]: PostApi.reducer,
	post: PostSlice.reducer,
	[ShopApi.reducerPath]: ShopApi.reducer,
	shop: ShopSlice.reducer,
	[LogupApi.reducerPath]: LogupApi.reducer,
});
