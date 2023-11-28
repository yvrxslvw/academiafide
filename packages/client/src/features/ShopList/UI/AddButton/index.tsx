import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, INewProduct, isErrorFromBackend, useCreateProductMutation } from 'shared';
import { usePopup } from 'entities';

interface AddButtonProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const AddButton: FC<AddButtonProps> = ({ data, setData, setIsModalShown, refetch }) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const [createProduct, { data: fetchData, error: fetchError, isLoading }] = useCreateProductMutation();

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
		formData.append('title', title);
		formData.append('description', description);
		formData.append('price', price.toString());
		if (image) formData.append('image', image);

		await createProduct(formData);
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
			createPopup(t('El producto ha sido creado exitosamente.'));
			setData({ ...data, title: '', description: '', price: 0, image: {} as File });
		}
	}, [fetchData]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Siguiente')}
		</Button>
	);
};
