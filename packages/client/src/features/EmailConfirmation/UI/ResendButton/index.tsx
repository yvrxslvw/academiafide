import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './style.module.scss';
import { useEmailConfirmationMutation } from 'shared/api';
import { usePopup } from 'processes/Popup';

interface ResendButtonProps {
	email: string | null;
}

export const ResendButton: FC<ResendButtonProps> = ({ email }) => {
	const { t } = useTranslation();
	const [disabled, setDisabled] = useState(false);
	const [resend, { error, isSuccess }] = useEmailConfirmationMutation();
	const { createPopup } = usePopup();

	useEffect(() => {
		if (error) createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
	}, [error]);

	useEffect(() => {
		if (isSuccess) {
			setDisabled(false);
			createPopup(t('El correo electrónico fue enviada al correo electrónico especificado.'));
		}
	}, [isSuccess]);

	if (!email) return null;

	const onClickHandler = async () => {
		setDisabled(true);
		await resend({ email, resend: true });
	};

	return (
		<button className={cl.ResendButton} onClick={onClickHandler} disabled={disabled}>
			{disabled ? t('Cargando por favor espere...') : t('¿El correo electrónico no ha llegado? Haga clic aquí.')}
		</button>
	);
};
