import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './User.slice';

type State = CombinedState<UserState>;

export const login = (state: State, action: PayloadAction<UserState>) => {
	state.userInfo = action.payload.userInfo;
	state.isLogged = true;
};

export const logout = (state: State) => {
	state.userInfo = {
		id: -1,
		login: '',
		roles: [],
		avatarUrl: '',
	};
	state.isLogged = false;
};
