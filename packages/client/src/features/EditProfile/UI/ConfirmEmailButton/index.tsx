import { usePopup } from 'processes/Popup';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';
import { useEmailConfirmationMutation } from 'shared/api';

interface ConfirmEmailButtonProps {
	email: string;
	setShownConfirmEmailModal: Dispatch<SetStateAction<boolean>>;
}

export const ConfirmEmailButton: FC<ConfirmEmailButtonProps> = ({ email, setShownConfirmEmailModal }) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const [sendCode, { error, isSuccess, isLoading }] = useEmailConfirmationMutation();

	const onClickHandler = async () => {
		await sendCode({ email });
	};

	useEffect(() => {
		if (isSuccess) setShownConfirmEmailModal(true);
	}, [isSuccess]);

	useEffect(() => {
		if (error) createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
	}, [error]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Confirmar correo electrónico')}
		</Button>
	);
};
