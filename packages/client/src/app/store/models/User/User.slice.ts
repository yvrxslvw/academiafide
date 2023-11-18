import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from './User.actions';
import { IUser } from 'shared';

export interface UserState {
	userInfo: IUser;
	isLogged: boolean;
}

const initialState: UserState = {
	userInfo: {
		id: -1,
		login: '',
		roles: [],
		avatarUrl: 'https://via.placeholder.com/600/92c952', // !
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
