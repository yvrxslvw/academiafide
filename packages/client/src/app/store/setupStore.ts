import { configureStore } from '@reduxjs/toolkit';
import { AuthApi, PostApi, ShopApi, UserApi } from 'shared';
import { rootReducer } from './rootReducer';

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware()
				.concat(PostApi.middleware)
				.concat(ShopApi.middleware)
				.concat(AuthApi.middleware)
				.concat(UserApi.middleware),
	});
