import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { usePopup } from 'processes/Popup';
import { Button } from 'shared/UI';
import { useCreateRoleMutation } from 'shared/api';
import { isErrorFromBackend } from 'shared/utils';

interface ConfirmAdditionButtonProps {
	tag: string;
	description: string;
	refetch: () => void;
	setTag: Dispatch<SetStateAction<string>>;
	setDescription: Dispatch<SetStateAction<string>>;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const ConfirmAdditionButton: FC<ConfirmAdditionButtonProps> = ({
	tag,
	description,
	refetch,
	setTag,
	setDescription,
	setModalShown,
}) => {
	const { t } = useTranslation();
	const [createRole, { error, isLoading, isSuccess }] = useCreateRoleMutation();
	const { createPopup } = usePopup();

	const onClickHandler = async () => {
		if (tag.length < 3 || tag.length > 24)
			return createPopup(t('La longitud de la etiqueta de rol no debe ser inferior a 3 ni superior a 24 caracteres.'));
		if (description.length < 3 || description.length > 32)
			return createPopup(t('La longitud de la descripción del rol no debe ser inferior a 3 ni superior a 24 caracteres.'));

		await createRole({ tag, description });
	};

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error) && error.data.statusCode === 403) createPopup(t('Este rol ya existe.'));
			else createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		}
	}, [error]);

	useEffect(() => {
		if (isSuccess) {
			createPopup(t('El rol se ha creado exitosamente.'));
			refetch();
			setTag('');
			setDescription('');
			setModalShown(false);
		}
	}, [isSuccess]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Agregar')}
		</Button>
	);
};
