import { createSlice } from '@reduxjs/toolkit';
import { AuthApi } from 'shared/api';
import { IUser } from 'shared/models';
import { login, logout } from './User.actions';

export interface UserState {
	userInfo: IUser;
	isLogged: boolean;
}

const initialState: UserState = {
	userInfo: {
		id: -1,
		login: '',
		email: null,
		email_confirmed: false,
		email_news: false,
		password: '',
		recovery_password: null,
		image: null,
		createdAt: '',
		roles: [],
	},
	isLogged: false,
};

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login,
		logout,
	},
	extraReducers: builder => {
		builder.addMatcher(AuthApi.endpoints.login.matchFulfilled, login);
		builder.addMatcher(AuthApi.endpoints.logup.matchFulfilled, login);
		builder.addMatcher(AuthApi.endpoints.refresh.matchFulfilled, login);
	},
});

export const { actions, reducer } = UserSlice;
