import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { INewProduct } from 'shared/models';

interface LinkInputProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const LinkInput: FC<LinkInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, link: event.target.value, linkError: false });
	};

	return <Input label={t('Enlace de producto')} value={data.link} onChange={onChangeHandler} error={data.linkError} />;
};
