import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { INewProduct, Input } from 'shared';

interface TitleInputProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const TitleInput: FC<TitleInputProps> = ({ data, setData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, title: event.target.value, titleError: false });
	};

	return <Input label='El nombre del producto' value={data.title} onChange={onChangeHandler} error={data.titleError} />;
};
