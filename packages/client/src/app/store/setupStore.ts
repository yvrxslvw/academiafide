import { configureStore } from '@reduxjs/toolkit';
import { AuthApi, PostApi, RolesApi, ShopApi, UsersApi } from 'shared/api';
import { rootReducer } from './rootReducer';

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware()
				.concat(PostApi.middleware)
				.concat(ShopApi.middleware)
				.concat(AuthApi.middleware)
				.concat(UsersApi.middleware)
				.concat(RolesApi.middleware),
	});
