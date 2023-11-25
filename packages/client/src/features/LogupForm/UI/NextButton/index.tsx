import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Button, isErrorFromBackend, useLogupMutation } from 'shared';
import { LogupModels, usePopup } from 'entities';

interface NextButtonProps {
	logupData: LogupModels.LogupData;
	setLogupData: Dispatch<SetStateAction<LogupModels.LogupData>>;
}

export const NextButton: FC<NextButtonProps> = ({ logupData, setLogupData }) => {
	const [fetchLogup, { data, error, isLoading }] = useLogupMutation();
	const { createPopup } = usePopup();

	const onClickHandler = async () => {
		setLogupData({ ...logupData, loginError: false, passwordError: false, passwordConfirmError: false });
		const { login, password, passwordConfirm, terms } = logupData;
		const loginRegex = /^(?=.*[a-z])[a-z0-9.]{3,24}$/;
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[0-9!@#$%^&*()_+\-=/\\[\]?.,;:'"{}<>|])[a-zA-Z0-9!@#$%^&*()_+\-=/\\[\]?.,;:'"{}<>|]{3,}/;

		if (login.search(loginRegex) === -1) {
			createPopup('Nombre de usuario es incorrecto.');
			setLogupData({ ...logupData, loginError: true });
			return;
		}
		if (password.search(passwordRegex) === -1) {
			createPopup('Contraseña es incorrecta.');
			setLogupData({ ...logupData, passwordError: true });
			return;
		}
		if (!passwordConfirm || passwordConfirm !== password) {
			createPopup('Contraseñas no coincide.');
			setLogupData({ ...logupData, passwordConfirmError: true });
			return;
		}
		if (!terms) {
			createPopup('No has aceptado los términos y condiciones de uso.');
			return;
		}

		await fetchLogup({ login, password });
		// todo: navigate to the user account
	};

	useEffect(() => {
		if (data) window.localStorage.setItem('accessToken', data.token);
	}, [data]);

	useEffect(() => {
		if (isErrorFromBackend(error)) {
			if (error.data.statusCode === 403) {
				setLogupData({ ...logupData, loginError: true });
				createPopup('Este nombre de usuario ya está en uso.');
			} else {
				createPopup('Se produjo un error inesperado... Vuelva a intentarlo más tarde.');
			}
		}
	}, [error]);

	return (
		<Button type='submit' onClick={onClickHandler} loading={isLoading}>
			Siguente
		</Button>
	);
};
