import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';
import { useEditProductMutation } from 'shared/api';
import { INewProduct } from 'shared/models';
import { isErrorFromBackend } from 'shared/utils';
import { usePopup } from 'processes/Popup';

interface EditButtonProps {
	productId: number;
	oldTitle: string;
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const EditButton: FC<EditButtonProps> = ({ productId, oldTitle, data, setData, setIsModalShown, refetch }) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const [editProduct, { data: fetchData, error: fetchError, isLoading }] = useEditProductMutation();

	const onClickHandler = async () => {
		setData({ ...data, titleError: false, descriptionError: false, priceError: false });
		const { title, description, price, image } = data;

		if (title.length < 3 || title.length > 24) {
			createPopup(t('Nombre de producto incorrecto.'));
			setData({ ...data, titleError: true });
			return;
		}
		if (Number.isNaN(price) || price <= 0) {
			createPopup(t('Precio del producto incorrecto.'));
			setData({ ...data, priceError: true });
			return;
		}
		if (description.length < 3 || description.length > 255) {
			createPopup(t('Descripción del producto incorrecta.'));
			setData({ ...data, descriptionError: true });
			return;
		}

		const formData = new FormData();
		if (title !== oldTitle) formData.append('title', title);
		formData.append('description', description);
		formData.append('price', price.toString());
		if (image) formData.append('image', image);

		await editProduct({ id: productId, body: formData });
	};

	useEffect(() => {
		if (fetchError) {
			if (isErrorFromBackend(fetchError)) {
				if (fetchError.data.statusCode === 403) createPopup(t('Este producto ya existe.'));
			} else {
				createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
			}
		}
	}, [fetchError]);

	useEffect(() => {
		if (fetchData) {
			setIsModalShown(false);
			refetch();
			createPopup(t('El producto ha sido editado exitosamente.'));
			setData({ ...data, title: '', description: '', price: 0, image: {} as File });
		}
	}, [fetchData]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Siguiente')}
		</Button>
	);
};
