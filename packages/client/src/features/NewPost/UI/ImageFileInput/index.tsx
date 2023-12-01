import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { FileInput } from 'shared/UI';
import { INewPost } from 'shared/models';

interface ImageFileInputProps {
	data: INewPost;
	setData: Dispatch<SetStateAction<INewPost>>;
}

export const ImageFileInput: FC<ImageFileInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;

		if (files) {
			for (const file of files) {
				setData({ ...data, image: file });
			}
		}
	};

	return <FileInput label={t('Publicar imagen')} accept='image/png, image/jpeg' onChange={onChangeHandler} />;
};
