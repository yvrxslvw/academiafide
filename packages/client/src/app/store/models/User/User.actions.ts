import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'shared/models';
import { UserState } from './User.slice';

type State = CombinedState<UserState>;

export const login = (state: State, action: PayloadAction<{ token: string; user: IUser }>) => {
	state.userInfo = action.payload.user;
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
