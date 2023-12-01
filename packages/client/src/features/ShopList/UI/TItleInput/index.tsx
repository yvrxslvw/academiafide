import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { INewProduct } from 'shared/models';

interface TitleInputProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const TitleInput: FC<TitleInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, title: event.target.value, titleError: false });
	};

	return (
		<Input label={t('El nombre del producto')} value={data.title} onChange={onChangeHandler} error={data.titleError} />
	);
};
