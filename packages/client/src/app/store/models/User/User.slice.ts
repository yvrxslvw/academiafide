import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'shared';
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
});

export const { actions, reducer } = UserSlice;
