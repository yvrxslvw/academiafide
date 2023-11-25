import { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { PublicRouterPaths, isErrorFromBackend, useGetUserInfoMutation, useLoginMutation } from 'shared';
import { LoginModels, usePopup } from 'entities';

export const useFetchLogin = (
	loginData: LoginModels.LoginData,
	setLoginData: Dispatch<SetStateAction<LoginModels.LoginData>>,
) => {
	const [fetchLogin, { data, error, isLoading }] = useLoginMutation();
	const [loginUser] = useGetUserInfoMutation();
	const { createPopup } = usePopup();
	const navigate = useNavigate();

	useEffect(() => {
		if (data) {
			window.localStorage.setItem('accessToken', data.token);
			loginUser();
			navigate(PublicRouterPaths.MAIN_PAGE); // !
		}
	}, [data]);

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error) && error.data.statusCode === 403) {
				createPopup('Nombre de usuario o contraseña incorrectos.');
				setLoginData({ ...loginData, loginError: true, passwordError: true });
			} else {
				createPopup('Se produjo un error inesperado... Vuelva a intentarlo más tarde.');
			}
		}
	}, [error]);

	return { fetchLogin, isLoading, createPopup };
};
