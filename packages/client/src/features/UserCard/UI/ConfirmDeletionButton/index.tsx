import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePopup } from 'processes/Popup';
import { Button } from 'shared/UI';
import { useDeleteUserMutation } from 'shared/api';
import { PublicRouterPaths } from 'shared/constants';

interface ConfirmDeletionButtonProps {
	userId: number;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const ConfirmDeletionButton: FC<ConfirmDeletionButtonProps> = ({ userId, setModalShown }) => {
	const { t } = useTranslation();
	const [deleteAccount, { isError, isLoading, isSuccess }] = useDeleteUserMutation();
	const { createPopup } = usePopup();
	const navigate = useNavigate();

	const onClickHandler = async () => {
		await deleteAccount({ id: userId });
	};

	useEffect(() => {
		if (isError) createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
	}, [isError]);

	useEffect(() => {
		if (isSuccess) {
			createPopup(t('Eliminado con éxito.'));
			setModalShown(false);
			navigate(PublicRouterPaths.MAIN_PAGE);
		}
	}, [isSuccess]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Eliminar')}
		</Button>
	);
};
