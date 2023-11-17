import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '.';

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
	isLogged: true, // !
};

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export const { actions, reducer } = UserSlice;
