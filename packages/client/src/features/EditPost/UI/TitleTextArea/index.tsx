import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { INewPost, Textarea } from 'shared';

interface TitleTextAreaProps {
	data: INewPost;
	setData: Dispatch<SetStateAction<INewPost>>;
}

export const TitleTextArea: FC<TitleTextAreaProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setData({ ...data, title: event.target.value, titleError: false });
	};

	return (
		<Textarea label={t('Publicar título')} max={255} value={data.title} onChange={onChangeHandler} error={data.titleError} />
	);
};
