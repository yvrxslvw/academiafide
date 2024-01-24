import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { usePopup } from 'processes/Popup';
import { Button } from 'shared/UI';
import { useDeleteRoleMutation } from 'shared/api';
import { isErrorFromBackend } from 'shared/utils';

interface ConfirmDeletionButtonProps {
	id: number;
	setModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const ConfirmDeletionButton: FC<ConfirmDeletionButtonProps> = ({ id, setModalShown, refetch }) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const [deleteRole, { error, isLoading, isSuccess }] = useDeleteRoleMutation();

	const onClickHandler = async () => {
		await deleteRole({ id });
	};

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error)) createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		}
	}, [error]);

	useEffect(() => {
		if (isSuccess) {
			createPopup(t('El rol se eliminó correctamente.'));
			refetch();
			setModalShown(false);
		}
	}, [isSuccess]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Eliminar')}
		</Button>
	);
};
