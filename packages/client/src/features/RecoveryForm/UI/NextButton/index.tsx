import { ButtonHTMLAttributes, Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from 'shared/UI';
import { useRecoveryMutation } from 'shared/api';
import { PublicRouterPaths } from 'shared/constants';
import { isErrorFromBackend } from 'shared/utils';
import { RecoveryData } from 'entities/recovery';
import { usePopup } from 'processes/Popup';

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	recoveryData: RecoveryData;
	setRecoveryData: Dispatch<SetStateAction<RecoveryData>>;
}

export const NextButton: FC<NextButtonProps> = ({ recoveryData, setRecoveryData }) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const [recovery, { error, data, isLoading }] = useRecoveryMutation();
	const navigate = useNavigate();

	const onClickHandler = async () => {
		const { email } = recoveryData;
		const emailRegex =
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:)\])/;

		if (email.search(emailRegex) === -1) {
			createPopup(t('Correo electronico incorrecto.'));
			setRecoveryData({ ...recoveryData, emailError: true });
			return;
		}

		await recovery({ email });
	};

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error) && error.data.statusCode === 404) {
				createPopup(t('Correo electronico incorrecto.'));
				setRecoveryData({ ...recoveryData, emailError: true });
			} else {
				createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
			}
		}
	}, [error]);

	useEffect(() => {
		if (data) {
			createPopup(
				`${t('Se ha enviado un correo electrónico con una nueva contraseña a su correo electrónico')} ${
					recoveryData.email
				}.`,
			);
			navigate(PublicRouterPaths.LOGIN_PAGE);
		}
	}, [data]);

	return (
		<Button type='submit' onClick={onClickHandler} loading={isLoading}>
			{t('Siguiente')}
		</Button>
	);
};
