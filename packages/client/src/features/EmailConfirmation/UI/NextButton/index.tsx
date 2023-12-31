import { usePopup } from 'processes/Popup';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';
import { useConfirmEmailMutation } from 'shared/api';
import { isErrorFromBackend } from 'shared/utils';

interface NextButtonProps {
	code: string;
	refetch: () => void;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const NextButton: FC<NextButtonProps> = ({ code, refetch, setModalShown }) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const [confirm, { error, isSuccess, isLoading }] = useConfirmEmailMutation();

	const onClickHandler = async () => {
		await confirm({ code: Number(code) });
	};

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error)) {
				if (error.data.statusCode === 403) {
					createPopup(t('Código de confirmación inválido.'));
				} else {
					createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
				}
			}
		}
	}, [error]);

	useEffect(() => {
		if (isSuccess) {
			setModalShown(false);
			refetch();
			createPopup(t('¡La dirección de correo electrónico ha sido verificada exitosamente!'));
		}
	}, [isSuccess]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Siguiente')}
		</Button>
	);
};
