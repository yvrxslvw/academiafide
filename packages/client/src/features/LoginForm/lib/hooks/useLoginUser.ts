import { useEffect } from 'react';
import { useAppDispatch, useGetUserInfoMutation } from 'shared';
import { UserSlice } from 'app/store/models';

export const useLoginUser = () => {
	const [getInfo, { data }] = useGetUserInfoMutation();
	const dispatch = useAppDispatch();
	const { login } = UserSlice.actions;

	const loginUser = async () => {
		await getInfo();
	};

	useEffect(() => {
		if (data) dispatch(login(data));
	}, [data]);

	return { loginUser };
};
