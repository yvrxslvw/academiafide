import { usePopup } from 'entities';
import { Dispatch, FC, SetStateAction } from 'react';
import { Button, INewProduct } from 'shared';

interface NextButtonProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const NextButton: FC<NextButtonProps> = ({ data, setData }) => {
	const { createPopup } = usePopup();

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
	};

	return <Button onClick={onClickHandler}>Siguiente</Button>;
};
