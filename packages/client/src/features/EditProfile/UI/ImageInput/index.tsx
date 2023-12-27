import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { FileInput } from 'shared/UI';
import { IEditProfile } from 'shared/models';

interface ImageInputProps {
	data: IEditProfile;
	setData: Dispatch<SetStateAction<IEditProfile>>;
}

export const ImageInput: FC<ImageInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;

		if (files) {
			for (const file of files) {
				setData({ ...data, image: file });
			}
		}
	};

	return <FileInput label={t('Foto de perfil')} accept='image/png, image/jpeg' onChange={onChangeHandler} />;
};
