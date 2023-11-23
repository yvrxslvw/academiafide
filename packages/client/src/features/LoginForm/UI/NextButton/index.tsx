import { FC, SetStateAction, Dispatch, useEffect } from 'react';
import { Button, isErrorFromBackend, useAppDispatch, useGetUserInfoMutation, useLoginMutation } from 'shared';
import { LoginModels } from 'entities';
import { UserSlice } from 'app/store/models';

interface NextButtonProps {
	loginData: LoginModels.LoginData;
	setLoginData: Dispatch<SetStateAction<LoginModels.LoginData>>;
}

export const NextButton: FC<NextButtonProps> = ({ loginData, setLoginData }) => {
	const [fetchLogin, { data: fetchLoginData, error: fetchLoginError }] = useLoginMutation();
	const [fetchGetUserInfo, { data: fetchGetUserInfoData, error: fetchGetUserInfoError }] = useGetUserInfoMutation();
	const dispatch = useAppDispatch();
	const { login } = UserSlice.actions;

	const onClickHandler = async () => {
		setLoginData({ ...loginData, loginError: false, passwordError: false });
		const { login, password } = loginData;

		if (!login || !password) {
			// todo: show popup
			setLoginData({ ...loginData, loginError: true, passwordError: true });
			return;
		}

		await fetchLogin({ login, password });
		// todo: navigate to the user account
	};

	useEffect(() => {
		if (fetchLoginData) {
			window.localStorage.setItem('accessToken', fetchLoginData.token);
			fetchGetUserInfo(fetchLoginData.token); // ! await
		}
	}, [fetchLoginData]);

	useEffect(() => {
		if (fetchGetUserInfoData) {
			dispatch(login(fetchGetUserInfoData));
		}
	}, [fetchGetUserInfoData]);

	useEffect(() => {
		if (isErrorFromBackend(fetchLoginError) && fetchLoginError.data.statusCode === 403) {
			// todo: wrong data error popup
			setLoginData({ ...loginData, loginError: true, passwordError: true });
		} else {
			// todo: unexpected error popup
		}
	}, [fetchLoginError]);

	useEffect(() => {
		if (fetchGetUserInfoError) {
			// todo: unexpected error popup
		}
	}, [fetchGetUserInfoError]);

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
