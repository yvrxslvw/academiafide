import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { usePopup } from 'processes/Popup';
import { Button } from 'shared/UI';
import { useUpdateRoleMutation } from 'shared/api';
import { isErrorFromBackend } from 'shared/utils';

interface ConfirmEditionButtonProps {
	id: number;
	tag: string;
	description: string;
	setModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const ConfirmEditionButton: FC<ConfirmEditionButtonProps> = ({
	id,
	tag,
	description,
	setModalShown,
	refetch,
}) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const [updateRole, { error, isSuccess, isLoading }] = useUpdateRoleMutation();

	const onClickHandler = async () => {
		if (tag.length < 3 || tag.length > 24) return createPopup(t(''));
		if (description.length < 3 || description.length > 32) return createPopup(t(''));

		await updateRole({ id, tag, description });
	};

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error) && error.data.statusCode === 403) createPopup(t('Este rol ya existe.'));
			else createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		}
	}, [error]);

	useEffect(() => {
		if (isSuccess) {
			createPopup(t('El rol se ha editado correctamente.'));
			refetch();
			setModalShown(false);
		}
	}, [isSuccess]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Editar')}
		</Button>
	);
};
