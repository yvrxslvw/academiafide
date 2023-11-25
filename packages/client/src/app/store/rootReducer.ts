import { combineReducers } from '@reduxjs/toolkit';
import { AuthApi, PostApi, ShopApi, UserApi } from 'shared';
import { PostSlice, ShopSlice, PopupSlice } from 'entities';
import { UserSlice } from './models';

export const rootReducer = combineReducers({
	user: UserSlice.reducer,
	[PostApi.reducerPath]: PostApi.reducer,
	post: PostSlice.reducer,
	[ShopApi.reducerPath]: ShopApi.reducer,
	shop: ShopSlice.reducer,
	[AuthApi.reducerPath]: AuthApi.reducer,
	[UserApi.reducerPath]: UserApi.reducer,
	popup: PopupSlice.reducer,
});
