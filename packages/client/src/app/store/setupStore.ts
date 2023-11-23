import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { PostApi } from 'shared';

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PostApi.middleware),
	});
