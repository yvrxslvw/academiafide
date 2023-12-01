import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Textarea } from 'shared/UI';
import { INewPost } from 'shared/models';

interface ContentTextAreaProps {
	data: INewPost;
	setData: Dispatch<SetStateAction<INewPost>>;
}

export const ContentTextArea: FC<ContentTextAreaProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setData({ ...data, content: event.target.value, contentError: false });
	};

	return (
		<Textarea
			label={t('Publicar contenido')}
			max={4096}
			value={data.content}
			onChange={onChangeHandler}
			error={data.contentError}
		/>
	);
};
