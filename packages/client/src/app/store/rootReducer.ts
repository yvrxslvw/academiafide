import { combineReducers } from '@reduxjs/toolkit';
import { PostSlice, ShopSlice } from 'entities';
import { UserSlice } from './models';

export const rootReducer = combineReducers({
	user: UserSlice.reducer,
	post: PostSlice.reducer,
	shop: ShopSlice.reducer,
});
