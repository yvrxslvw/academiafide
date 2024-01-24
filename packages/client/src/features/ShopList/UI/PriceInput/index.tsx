import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { INewProduct } from 'shared/models';

interface PriceInputProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const PriceInput: FC<PriceInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.target.value = event.target.value.replace(/[^\d]/g, '');
		setData({ ...data, price: event.target.value, priceError: false });
	};

	return (
		<Input
			label={t('Precio del nuevo producto')}
			value={data.price}
			onChange={onChangeHandler}
			error={data.priceError}
		/>
	);
};
