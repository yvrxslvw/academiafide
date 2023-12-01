import { Dispatch, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useLoginMutation } from 'shared/api';
import { PublicRouterPaths } from 'shared/constants';
import { isErrorFromBackend } from 'shared/utils';
import { LoginData } from 'entities/login';
import { usePopup } from 'processes/Popup';

export const useFetchLogin = (loginData: LoginData, setLoginData: Dispatch<SetStateAction<LoginData>>) => {
	const { t } = useTranslation();
	const [loginUser, { data, error, isLoading }] = useLoginMutation();
	const { createPopup } = usePopup();
	const navigate = useNavigate();

	useEffect(() => {
		if (data) {
			window.localStorage.setItem('accessToken', data.token);
			navigate(PublicRouterPaths.MAIN_PAGE); // !
		}
	}, [data]);

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error) && error.data.statusCode === 403) {
				createPopup(t('Nombre de usuario o contraseña incorrectos.'));
				setLoginData({ ...loginData, loginError: true, passwordError: true });
			} else {
				createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
			}
		}
	}, [error]);

	return { fetchLogin: loginUser, isLoading, createPopup };
};
