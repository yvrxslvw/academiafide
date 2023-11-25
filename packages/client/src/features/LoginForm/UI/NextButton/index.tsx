import { FC, SetStateAction, Dispatch, useEffect } from 'react';
import { Button, isErrorFromBackend, useLoginMutation } from 'shared';
import { LoginModels } from 'entities';

interface NextButtonProps {
	loginData: LoginModels.LoginData;
	setLoginData: Dispatch<SetStateAction<LoginModels.LoginData>>;
}

export const NextButton: FC<NextButtonProps> = ({ loginData, setLoginData }) => {
	const [fetchLogin, { data, error }] = useLoginMutation();

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
		if (data) {
			window.localStorage.setItem('accessToken', data.token);
		}
	}, [data]);

	useEffect(() => {
		if (isErrorFromBackend(error) && error.data.statusCode === 403) {
			// todo: wrong data error popup
			setLoginData({ ...loginData, loginError: true, passwordError: true });
		} else {
			// todo: unexpected error popup
		}
	}, [error]);

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
