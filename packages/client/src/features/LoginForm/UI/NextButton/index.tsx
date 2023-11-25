import { FC, SetStateAction, Dispatch, useEffect } from 'react';
import { Button, isErrorFromBackend, useLoginMutation } from 'shared';
import { LoginModels, usePopup } from 'entities';

interface NextButtonProps {
	loginData: LoginModels.LoginData;
	setLoginData: Dispatch<SetStateAction<LoginModels.LoginData>>;
}

export const NextButton: FC<NextButtonProps> = ({ loginData, setLoginData }) => {
	const [fetchLogin, { data, error }] = useLoginMutation();
	const { createPopup } = usePopup();

	const onClickHandler = async () => {
		setLoginData({ ...loginData, loginError: false, passwordError: false });
		const { login, password } = loginData;

		if (!login || !password) {
			createPopup('Nombre de usuario o contraseña incorrectos');
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
			createPopup('Nombre de usuario o contraseña incorrectos');
			setLoginData({ ...loginData, loginError: true, passwordError: true });
		} else {
			createPopup('Se produjo un error inesperado... Vuelva a intentarlo más tarde.');
		}
	}, [error]);

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
