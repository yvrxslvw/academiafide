import { FC, SetStateAction, Dispatch } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared';
import { LoginModels } from 'entities';
import { useFetchLogin } from '../../lib';

interface NextButtonProps {
	loginData: LoginModels.LoginData;
	setLoginData: Dispatch<SetStateAction<LoginModels.LoginData>>;
}

export const NextButton: FC<NextButtonProps> = ({ loginData, setLoginData }) => {
	const { t } = useTranslation();
	const { fetchLogin, isLoading, createPopup } = useFetchLogin(loginData, setLoginData);

	const onClickHandler = async () => {
		setLoginData({ ...loginData, loginError: false, passwordError: false });
		const { login, password } = loginData;

		if (!login || !password) {
			createPopup(t('Nombre de usuario o contraseña incorrectos.'));
			setLoginData({ ...loginData, loginError: true, passwordError: true });
			return;
		}

		await fetchLogin({ login, password });
	};

	return (
		<Button type='submit' onClick={onClickHandler} loading={isLoading}>
			{t('Siguiente')}
		</Button>
	);
};
