import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { FileInput, INewProduct } from 'shared';

interface ImageInputProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const ImageInput: FC<ImageInputProps> = ({ data, setData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			for (const file of event.target.files) {
				setData({ ...data, image: file });
			}
		}
	};

	return <FileInput label='Subir archivo' onChange={onChangeHandler} />;
};