import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { INewProduct, Textarea } from 'shared';

interface DescriptionTextareaProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const DescriptionTextarea: FC<DescriptionTextareaProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setData({ ...data, description: event.target.value, descriptionError: false });
	};

	return (
		<Textarea
			label={t('Descripción del nuevo producto')}
			max={255}
			value={data.description}
			onChange={onChangeHandler}
			error={data.descriptionError}
		/>
	);
};
