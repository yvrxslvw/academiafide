import { combineReducers } from '@reduxjs/toolkit';
import { UserSlice } from './models';

export const rootReducer = combineReducers({
	user: UserSlice.reducer,
});
