import { FC, SetStateAction, Dispatch } from 'react';
import { Button } from 'shared';
import { LoginModels } from 'entities';
import { useFetchLogin, useLoginUser } from '../../lib';

interface NextButtonProps {
	loginData: LoginModels.LoginData;
	setLoginData: Dispatch<SetStateAction<LoginModels.LoginData>>;
}

export const NextButton: FC<NextButtonProps> = ({ loginData, setLoginData }) => {
	const { loginUser } = useLoginUser();
	const { fetchLogin, isLoading, createPopup } = useFetchLogin(loginData, setLoginData, loginUser);

	const onClickHandler = async () => {
		setLoginData({ ...loginData, loginError: false, passwordError: false });
		const { login, password } = loginData;

		if (!login || !password) {
			createPopup('Nombre de usuario o contraseña incorrectos.');
			setLoginData({ ...loginData, loginError: true, passwordError: true });
			return;
		}

		await fetchLogin({ login, password });
	};

	return (
		<Button type='submit' onClick={onClickHandler} loading={isLoading}>
			Siguente
		</Button>
	);
};
