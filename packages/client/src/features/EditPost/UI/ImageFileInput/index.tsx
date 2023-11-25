import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FileInput, INewPost } from 'shared';

interface ImageFileInputProps {
	data: INewPost;
	setData: Dispatch<SetStateAction<INewPost>>;
}

export const ImageFileInput: FC<ImageFileInputProps> = ({ data, setData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;

		if (files) {
			for (const file of files) {
				setData({ ...data, image: file });
			}
		}
	};

	return <FileInput label='Publicar imagen' accept='image/png, image/jpeg' onChange={onChangeHandler} />;
};
