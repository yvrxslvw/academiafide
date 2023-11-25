import { useEffect } from 'react';
import { UserSlice } from 'app/store/models';
import { useAppDispatch } from './useAppDispatch';
import { useGetUserInfoMutation } from '../api/user';

export const useLogin = () => {
	const [loginUser, { data }] = useGetUserInfoMutation();
	const dispatch = useAppDispatch();
	const { login: loginDispatch } = UserSlice.actions;

	const login = async () => {
		const accessToken = window.localStorage.getItem('accessToken');
		if (!accessToken) return;
		await loginUser(accessToken);
	};

	useEffect(() => {
		if (data) dispatch(loginDispatch(data));
	}, [data]);

	return { login };
};
