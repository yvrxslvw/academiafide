import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './User.slice';
import { IUser } from 'shared';

type State = CombinedState<UserState>;

export const login = (state: State, action: PayloadAction<IUser>) => {
	state.userInfo = action.payload;
	state.isLogged = true;
};

export const logout = (state: State) => {
	state.userInfo = {
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
	};
	state.isLogged = false;
};
