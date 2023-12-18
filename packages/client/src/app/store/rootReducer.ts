import { combineReducers } from '@reduxjs/toolkit';
import { AuthApi, PostApi, ShopApi, UsersApi } from 'shared/api';
import { PopupSlice } from 'entities/popup';
import { UserSlice } from './models';

export const rootReducer = combineReducers({
	user: UserSlice.reducer,
	popup: PopupSlice.reducer,
	[PostApi.reducerPath]: PostApi.reducer,
	[ShopApi.reducerPath]: ShopApi.reducer,
	[AuthApi.reducerPath]: AuthApi.reducer,
	[UsersApi.reducerPath]: UsersApi.reducer,
});
