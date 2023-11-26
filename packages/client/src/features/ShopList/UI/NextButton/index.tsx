import { usePopup } from 'entities';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Button, INewProduct, isErrorFromBackend, useCreateProductMutation } from 'shared';

interface NextButtonProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const NextButton: FC<NextButtonProps> = ({ data, setData, setIsModalShown, refetch }) => {
	const { createPopup } = usePopup();
	const [createProduct, { data: fetchData, error: fetchError, isLoading }] = useCreateProductMutation();

	const onClickHandler = async () => {
		setData({ ...data, titleError: false, descriptionError: false, priceError: false });
		const { title, description, price, image } = data;

		if (title.length < 3 || title.length > 24) {
			createPopup('Nombre de producto incorrecto.');
			setData({ ...data, titleError: true });
			return;
		}
		if (Number.isNaN(price) || price <= 0) {
			createPopup('Precio del producto incorrecto.');
			setData({ ...data, priceError: true });
			return;
		}
		if (description.length < 3 || description.length > 255) {
			createPopup('Descripción del producto incorrecta.');
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
				if (fetchError.data.statusCode === 403) createPopup('Este producto ya existe.');
			} else {
				createPopup('Se produjo un error inesperado... Vuelva a intentarlo más tarde.');
			}
		}
	}, [fetchError]);

	useEffect(() => {
		if (fetchData) {
			setIsModalShown(false);
			refetch();
			createPopup('El producto ha sido creado exitosamente.');
			setData({ ...data, title: '', description: '', price: 0, image: {} as File });
		}
	}, [fetchData]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			Siguiente
		</Button>
	);
};
