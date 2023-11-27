import { usePopup } from 'entities';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Button, useDeleteProductMutation } from 'shared';

interface DeleteButtonProps {
	productId: number;
	refetch: () => void;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ productId, refetch, setIsModalShown }) => {
	const [deleteProduct, { data: fetchData, error: fetchError, isLoading }] = useDeleteProductMutation();
	const { createPopup } = usePopup();

	const onClickHandler = async () => {
		await deleteProduct(productId);
	};

	useEffect(() => {
		if (fetchError) {
			createPopup('Se produjo un error inesperado... Vuelva a intentarlo más tarde.');
		}
	}, [fetchError]);

	useEffect(() => {
		if (fetchData) {
			refetch();
			setIsModalShown(false);
			createPopup('Eliminado con éxito.');
		}
	}, [fetchData]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			Eliminar
		</Button>
	);
};
