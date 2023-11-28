import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { INewProduct, Input } from 'shared';

interface PriceInputProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const PriceInput: FC<PriceInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, price: Number(event.target.value), priceError: false });
	};

	return (
		<Input
			label={t('Precio del nuevo producto')}
			type='number'
			value={data.price}
			onChange={onChangeHandler}
			error={data.priceError}
		/>
	);
};
