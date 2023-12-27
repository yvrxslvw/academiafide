import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';
import { RegExp } from 'shared/RegExp';
import { useLogupMutation } from 'shared/api';
import { isErrorFromBackend } from 'shared/utils';
import { LogupData } from 'entities/logup';
import { usePopup } from 'processes/Popup';

interface NextButtonProps {
	logupData: LogupData;
	setLogupData: Dispatch<SetStateAction<LogupData>>;
}

export const NextButton: FC<NextButtonProps> = ({ logupData, setLogupData }) => {
	const { t } = useTranslation();
	const [fetchLogup, { data, error, isLoading }] = useLogupMutation();
	const { createPopup } = usePopup();

	const onClickHandler = async () => {
		setLogupData({ ...logupData, loginError: false, passwordError: false, passwordConfirmError: false });
		const { login, password, passwordConfirm, terms } = logupData;

		if (login.search(RegExp.login) === -1) {
			createPopup(t('Nombre de usuario es incorrecto.'));
			setLogupData({ ...logupData, loginError: true });
			return;
		}
		if (password.search(RegExp.password) === -1) {
			createPopup(t('Contraseña es incorrecta.'));
			setLogupData({ ...logupData, passwordError: true });
			return;
		}
		if (!passwordConfirm || passwordConfirm !== password) {
			createPopup(t('Contraseñas no coincide.'));
			setLogupData({ ...logupData, passwordConfirmError: true });
			return;
		}
		if (!terms) {
			createPopup(t('No has aceptado los términos y condiciones de uso.'));
			return;
		}

		await fetchLogup({ login, password });
		// todo: navigate to the user account
	};

	useEffect(() => {
		if (data) window.localStorage.setItem('accessToken', data.token);
	}, [data]);

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error) && error.data.statusCode === 403) {
				setLogupData({ ...logupData, loginError: true });
				createPopup(t('Este nombre de usuario ya está en uso.'));
			} else {
				createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
			}
		}
	}, [error]);

	return (
		<Button type='submit' onClick={onClickHandler} loading={isLoading}>
			{t('Siguiente')}
		</Button>
	);
};
