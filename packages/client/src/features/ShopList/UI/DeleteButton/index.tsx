import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';
import { useDeleteProductMutation } from 'shared/api';
import { usePopup } from 'processes/Popup';

interface DeleteButtonProps {
	productId: number;
	refetch: () => void;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ productId, refetch, setIsModalShown }) => {
	const { t } = useTranslation();
	const [deleteProduct, { data: fetchData, error: fetchError, isLoading }] = useDeleteProductMutation();
	const { createPopup } = usePopup();

	const onClickHandler = async () => {
		await deleteProduct(productId);
	};

	useEffect(() => {
		if (fetchError) {
			createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		}
	}, [fetchError]);

	useEffect(() => {
		if (fetchData) {
			refetch();
			setIsModalShown(false);
			createPopup(t('Eliminado con éxito.'));
		}
	}, [fetchData]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Eliminar')}
		</Button>
	);
};
