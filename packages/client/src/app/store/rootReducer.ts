import { combineReducers } from '@reduxjs/toolkit';
import { AuthApi, PostApi, ShopApi } from 'shared';
import { PopupSlice } from 'entities';
import { UserSlice } from './models';

export const rootReducer = combineReducers({
	user: UserSlice.reducer,
	popup: PopupSlice.reducer,
	[PostApi.reducerPath]: PostApi.reducer,
	[ShopApi.reducerPath]: ShopApi.reducer,
	[AuthApi.reducerPath]: AuthApi.reducer,
});
