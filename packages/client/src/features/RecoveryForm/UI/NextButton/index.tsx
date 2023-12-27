import { ButtonHTMLAttributes, Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from 'shared/UI';
import { useRecoveryMutation } from 'shared/api';
import { PublicRouterPaths } from 'shared/constants';
import { isErrorFromBackend } from 'shared/utils';
import { RecoveryData } from 'entities/recovery';
import { usePopup } from 'processes/Popup';
import { RegExp } from 'shared/RegExp';

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

		if (email.search(RegExp.email) === -1) {
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
